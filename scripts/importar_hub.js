// Abre o painel de afiliados no Chrome REAL, em modo visivel (voce faz o login), e fica
// coletando os links curtos (meli.la/...) que aparecerem na tela ou nas respostas da rede.
// A cada varredura grava tambem uma captura da tela, para leitura do estado da pagina.
//
// Uso: node scripts/importar_hub.js
// Saidas: data/raw/hub_links.json e data/raw/hub.png
// O perfil do navegador fica em data/raw/perfil-navegador (fora do git, mantem o login).
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const HUB = "https://www.mercadolivre.com.br/afiliados/hub?is_affiliate=true#menu-user";
const PERFIL = path.join("data", "raw", process.argv[2] || "perfil-chrome");
const CANAL = process.argv[3] || "chrome";
const SAIDA = path.join("data", "raw", "hub_links.json");
const TELA = path.join("data", "raw", "hub.png");
const REGEX_LINK = /https?:\/\/(?:meli\.la|mercadolivre\.com\.br\/social)\/[A-Za-z0-9_\-]+/g;

const achados = new Map(); // link -> {link, visto_em}
let ultimaAssinatura = "";

function registrar(link) {
  if (achados.has(link)) return;
  achados.set(link, { link, visto_em: new Date().toISOString() });
  console.log(`+ ${link}`);
}

function gravar(estado) {
  fs.mkdirSync(path.dirname(SAIDA), { recursive: true });
  fs.writeFileSync(
    SAIDA,
    JSON.stringify(
      {
        quando: new Date().toISOString(),
        url_atual: estado.url,
        titulo: estado.titulo,
        total: achados.size,
        links: [...achados.values()],
      },
      null,
      1
    ),
    "utf8"
  );
}

(async () => {
  fs.mkdirSync(PERFIL, { recursive: true });
  const ctx = await chromium.launchPersistentContext(PERFIL, {
    channel: CANAL, // navegador real instalado na maquina
    headless: false,
    locale: "pt-BR",
    timezoneId: "America/Sao_Paulo",
    viewport: null, // usa o tamanho da janela aberta
    args: ["--start-maximized"],
  });
  const page = ctx.pages()[0] || (await ctx.newPage());

  ctx.on("response", async (resp) => {
    const tipo = resp.request().resourceType();
    if (tipo === "image" || tipo === "font" || tipo === "stylesheet") return;
    try {
      const texto = await resp.text();
      (texto.match(REGEX_LINK) || []).forEach(registrar);
    } catch (e) {
      /* corpo nao textual */
    }
  });

  console.log("abrindo o painel de afiliados no Chrome. faca o login e abra a pagina dos links.");
  await page.goto(HUB, { waitUntil: "domcontentloaded", timeout: 90000 }).catch(() => {});

  let encerrando = false;
  const encerrar = async (motivo) => {
    if (encerrando) return;
    encerrando = true;
    gravar({ url: page.url(), titulo: "" });
    console.log(`encerrando (${motivo}). links coletados: ${achados.size}`);
    await ctx.close().catch(() => {});
    process.exit(0);
  };
  ctx.on("close", () => void encerrar("janela fechada"));
  process.on("SIGINT", () => void encerrar("interrompido"));

  for (;;) {
    if (encerrando) return;
    try {
      await page.waitForTimeout(2500);
    } catch (e) {
      // janela fechada: sai sem erro
      return void encerrar("janela fechada");
    }
    let estado = { url: "", titulo: "" };
    try {
      const daPagina = await page.evaluate(() => ({
        url: location.href,
        titulo: document.title,
        hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.href),
        texto: document.body ? document.body.innerText : "",
      }));
      estado = { url: daPagina.url, titulo: daPagina.titulo };
      daPagina.hrefs.forEach((h) => (h.match(REGEX_LINK) || []).forEach(registrar));
      (daPagina.texto.match(REGEX_LINK) || []).forEach(registrar);
    } catch (e) {
      /* pagina navegando: tenta de novo */
    }

    // Grava so quando algo muda (link novo ou troca de pagina), para nao encher o disco.
    const assinatura = `${achados.size}|${estado.url}`;
    if (assinatura !== ultimaAssinatura) {
      ultimaAssinatura = assinatura;
      gravar(estado);
      await page.screenshot({ path: TELA, fullPage: false }).catch(() => {});
      console.log(`estado: ${(estado.titulo || "").slice(0, 60)} | links: ${achados.size}`);
    }
  }
})();
