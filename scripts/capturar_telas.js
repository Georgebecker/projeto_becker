// Gera as capturas do widget em docs/img (usadas no README).
// Uso: node scripts/capturar_telas.js [widget.js]
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const arquivo = path.resolve(process.argv[2] || "bloggermercadolivre.js");
const pasta = path.join("docs", "img");
const conteudo = fs.readFileSync(arquivo, "utf8");

const paginaDoBlog = (tema) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Ofertas do dia</title><style>
  body { margin:0; font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
         background:${tema === "dark" ? "#121212" : "#fafafa"};
         color:${tema === "dark" ? "#e8e8e8" : "#222"}; }
  article { max-width: 720px; margin: 0 auto; padding: 28px 20px 40px; }
  h1 { font-size: 26px; margin: 0 0 8px; }
  p { line-height: 1.6; color:${tema === "dark" ? "#b9b9b9" : "#555"}; }
</style></head><body><article>
  <h1>Ofertas do dia</h1>
  <p>Achei estas ofertas no Mercado Livre e separei aqui. O card troca de produto sozinho a cada 30 segundos.</p>
  ${conteudo}
  <p>Preços conferidos na data da publicação.</p>
</article></body></html>`;

(async () => {
  fs.mkdirSync(pasta, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  async function abrir({ largura = 760, altura = 620, tema = "light", pagina = null } = {}) {
    const page = await browser.newPage({
      viewport: { width: largura, height: altura },
      locale: "pt-BR",
      colorScheme: tema,
    });
    await page.setContent(pagina || `<!doctype html><html><body style="margin:0;background:#fff">${conteudo}</body></html>`);
    await page.waitForSelector("#mlw-titulo");
    await page.waitForTimeout(3000);
    return page;
  }

  // 1 e 2 — card padrão e depois da troca manual de produto
  let page = await abrir();
  await page.locator("#mlw-widget").screenshot({ path: path.join(pasta, "01-card.png") });
  await page.click("#mlw-proximo");
  await page.waitForTimeout(1500);
  await page.locator("#mlw-widget").screenshot({ path: path.join(pasta, "02-card-trocado.png") });
  await page.close();

  // 3 — modo escuro
  page = await abrir({ tema: "dark", pagina: paginaDoBlog("dark") });
  await page.locator("#mlw-widget").screenshot({ path: path.join(pasta, "03-modo-escuro.png") });
  await page.close();

  // 4 — tela de celular
  page = await abrir({ largura: 390, altura: 520 });
  await page.locator("#mlw-widget").screenshot({ path: path.join(pasta, "04-celular.png") });
  await page.close();

  // 5 — o widget dentro de um post
  page = await abrir({ largura: 800, altura: 620, pagina: paginaDoBlog("light") });
  await page.locator("article").screenshot({ path: path.join(pasta, "05-no-post.png") });
  await page.close();

  await browser.close();
  console.log("capturas salvas em", pasta);
})();
