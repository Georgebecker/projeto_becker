// Extrai, para cada link de afiliado, o produto em destaque da vitrine (o anuncio
// que o link aponta). Abre todos os links no Chromium de verdade, le o DOM
// renderizado e grava um JSON no formato que o widget do Blogger consome.
//
// Uso:
//   node scripts/extrair_destaques.js [arquivo_de_links] [arquivo_de_saida]
//
// Padroes: listalinks.txt -> data/processed/produtos.json
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const arquivoLinks = process.argv[2] || "listalinks.txt";
const arquivoSaida = process.argv[3] || path.join("data", "processed", "produtos.json");
const pausaMs = 3500;

function normalizarLinks(linhas) {
  const vistos = new Set();
  const saida = [];
  for (const linha of linhas) {
    const link = linha.trim();
    if (!link || link.startsWith("#") || vistos.has(link)) continue;
    vistos.add(link);
    saida.push(link);
  }
  return saida;
}

// Le o card em destaque e devolve os campos do widget.
function lerDestaque() {
  const card = document.querySelector(".poly-card");
  if (!card) return null;

  const limpar = (t) => (t || "").replace(/\s+/g, " ").trim();
  const valor = (el) => {
    if (!el) return null;
    const inteiro = limpar((el.querySelector(".andes-money-amount__fraction") || {}).textContent);
    const centavos = limpar((el.querySelector(".andes-money-amount__cents") || {}).textContent);
    if (!inteiro) return null;
    const numero = Number(inteiro.replace(/\./g, "") + (centavos ? "." + centavos : ""));
    if (!numero) return null;
    // Mesmo formato do widget antigo: milhar com ponto, centavos com virgula.
    const texto = numero.toLocaleString("pt-BR", {
      minimumFractionDigits: centavos ? 2 : 0,
      maximumFractionDigits: 2,
    });
    return "R$ " + texto;
  };

  const tituloEl = card.querySelector("a.poly-component__title");
  const link = tituloEl ? tituloEl.href : null;
  const idLink = link ? (link.match(/[?&]wid=([^&#]+)/) || [])[1] || null : null;
  // Sem "wid" no link, o id do catalogo (/p/MLB...) ou o link antigo (MLB-123...) serve de identificador.
  const idSemWid = link && ((link.match(/\/p\/(MLB\d+)/) || [])[1] || (link.match(/\/(MLB-\d+)/) || [])[1]);
  const id = idLink || (idSemWid ? idSemWid.replace("-", "") : null);

  const precoAtual = valor(card.querySelector(".poly-price__current .andes-money-amount"));
  const precoAnterior = valor(
    card.querySelector(".poly-component__price .andes-money-amount--previous")
  );

  const selos = [];
  const destaque = limpar((card.querySelector(".poly-component__highlight") || {}).textContent);
  if (destaque) selos.push(destaque);
  card.querySelectorAll(".poly-component__coupons, .poly-component__promotion").forEach((el) => {
    const t = limpar(el.textContent);
    if (t && !selos.includes(t)) selos.push(t);
  });

  const vendedorEl = card.querySelector(".poly-component__seller");
  let loja = limpar(vendedorEl && vendedorEl.textContent);
  // O bloco do vendedor as vezes traz "123 Comprou" (contagem de vendas) no lugar do nome.
  loja = loja
    .replace(/^Por\s+/i, "")
    .replace(/Loja oficial/gi, "")
    .replace(/\d+\s*Comprou/gi, "")
    .trim();
  if (!loja) loja = null;

  const reviews = limpar(
    (card.querySelector(".poly-component__reviews, .poly-reviews__rating") || {}).textContent
  );
  const nota = (reviews.match(/(\d[.,]\d)/) || [])[1] || null;
  const totalAvaliacoes = (reviews.match(/\(([\d.]+)\)/) || [])[1] || null;

  const freteEl = card.querySelector(".poly-component__shipping");
  const freteTexto = limpar(freteEl && freteEl.textContent);
  const full = !!card.querySelector(
    ".poly-component__shipping img[src*='full'], .poly-component__shipping [href*='full'], .poly-shipping__icon--full"
  ) || /full/i.test(freteTexto);

  const imgEl = card.querySelector("img.poly-component__picture");
  const imagem = imgEl ? imgEl.getAttribute("src") : null;

  return {
    id: id,
    titulo: limpar(tituloEl && tituloEl.textContent) || null,
    link: link,
    imagem: imagem,
    preco: precoAtual,
    preco_anterior: precoAnterior && precoAnterior !== precoAtual ? precoAnterior : null,
    desconto: limpar((card.querySelector(".poly-price__disc_label") || {}).textContent) || null,
    loja: loja,
    avaliacao: nota ? nota.replace(",", ".") : null,
    total_avaliacoes: totalAvaliacoes,
    frete_gratis: /frete\s+gr[áa]tis/i.test(freteTexto),
    full: full,
    selos: selos,
  };
}

(async () => {
  const links = normalizarLinks(fs.readFileSync(arquivoLinks, "utf8").split(/\r?\n/));
  console.log(`links unicos: ${links.length}`);

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    locale: "pt-BR",
    timezoneId: "America/Sao_Paulo",
    viewport: { width: 1366, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });
  const page = await ctx.newPage();

  const produtos = [];
  const falhas = [];
  const vistos = new Set();

  for (const [i, link] of links.entries()) {
    let produto = null;
    for (let tentativa = 1; tentativa <= 2 && !produto; tentativa++) {
      try {
        await page.goto(link, { waitUntil: "domcontentloaded", timeout: 60000 });
        await page.waitForSelector(".poly-card", { timeout: 20000 });
        await page.waitForTimeout(pausaMs);
        produto = await page.evaluate(lerDestaque);
      } catch (erro) {
        if (tentativa === 2) falhas.push({ link, erro: erro.message });
      }
    }

    if (!produto || !produto.titulo || !produto.link) {
      console.log(`[${i + 1}/${links.length}] ${link} — SEM DESTAQUE`);
      falhas.push({ link, erro: "destaque nao encontrado" });
      continue;
    }
    if (vistos.has(produto.link)) {
      console.log(`[${i + 1}/${links.length}] ${link} — repetido: ${produto.titulo.slice(0, 50)}`);
      continue;
    }
    vistos.add(produto.link);
    produto.origem = link;
    produtos.push(produto);
    console.log(
      `[${i + 1}/${links.length}] ${link} — ${produto.preco || "s/preco"} | ${produto.titulo.slice(0, 55)}`
    );
  }

  fs.mkdirSync(path.dirname(arquivoSaida), { recursive: true });
  fs.writeFileSync(
    arquivoSaida,
    JSON.stringify(
      { gerado_em: new Date().toISOString(), total: produtos.length, produtos, falhas },
      null,
      1
    ),
    "utf8"
  );
  console.log(`\nprodutos unicos: ${produtos.length} | falhas: ${falhas.length}`);
  console.log(`salvo em ${arquivoSaida}`);
  await browser.close();
})();
