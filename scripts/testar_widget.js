// Teste de fumaca: injeta o widget numa pagina (o arquivo .js seria lido como texto)
// e confere card, imagem e troca de produto.
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

(async () => {
  const arquivo = path.resolve(process.argv[2] || "bloggermercadolivre.js");
  const conteudo = fs.readFileSync(arquivo, "utf8");

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const erros = [];
  page.on("pageerror", (e) => erros.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") erros.push(m.text());
  });

  await page.setContent("<!doctype html><html><body>" + conteudo + "</body></html>", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForSelector("#mlw-titulo", { timeout: 15000 });
  await page.waitForTimeout(2500);

  const ler = () =>
    page.evaluate(() => {
      const img = document.querySelector("#mlw-img");
      const corpo = document.querySelector("#mlw-corpo");
      return {
        titulo: document.querySelector("#mlw-titulo").textContent,
        preco: document.querySelector("#mlw-preco").textContent,
        antigo: document.querySelector("#mlw-antigo").textContent,
        desconto: document.querySelector("#mlw-desconto").textContent,
        meta: document.querySelector("#mlw-meta").textContent,
        badges: [...document.querySelectorAll("#mlw-badges span")].map((s) => s.textContent),
        link: (corpo.getAttribute("href") || "").slice(0, 90),
        imagemOk: !!img && img.complete && img.naturalWidth > 0,
      };
    });

  const antes = await ler();
  console.log("primeiro card:", JSON.stringify(antes, null, 1));

  await page.click("#mlw-proximo");
  await page.waitForTimeout(1600);
  const depois = await ler();
  console.log(
    "apos 'proximo':",
    JSON.stringify({ titulo: depois.titulo, preco: depois.preco, imagemOk: depois.imagemOk })
  );

  const produtosNoArquivo = (conteudo.match(/"id":"MLB/g) || []).length;
  console.log("produtos no arquivo:", produtosNoArquivo);
  console.log("trocou de produto:", antes.titulo !== depois.titulo);
  console.log("imagem carregou:", antes.imagemOk && depois.imagemOk);
  console.log("erros de console:", erros.length ? erros.join(" | ") : "nenhum");

  await browser.close();
  if (!antes.imagemOk || antes.titulo === depois.titulo || erros.length) process.exit(1);
})();
