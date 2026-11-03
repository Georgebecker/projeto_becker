// Reescreve a lista DADOS do widget (bloggermercadolivre.js) a partir do JSON extraido.
//
// Uso:
//   node scripts/gerar_widget.js [produtos.json] [widget.js]
//
// Padroes: data/processed/produtos.json -> bloggermercadolivre.js
const fs = require("fs");
const path = require("path");

const arquivoProdutos = process.argv[2] || path.join("data", "processed", "produtos.json");
const arquivoWidget = process.argv[3] || "bloggermercadolivre.js";

const CAMPOS = [
  "id",
  "titulo",
  "link",
  "imagem",
  "preco",
  "preco_anterior",
  "desconto",
  "loja",
  "avaliacao",
  "total_avaliacoes",
  "frete_gratis",
  "full",
  "selos",
];

function normalizar(produto) {
  const saida = {};
  for (const campo of CAMPOS) {
    let valor = produto[campo];
    if (valor === undefined) valor = campo === "selos" ? [] : null;
    if (campo === "selos") valor = Array.isArray(valor) ? valor.filter(Boolean) : [];
    if (campo === "frete_gratis" || campo === "full") valor = !!valor;
    saida[campo] = valor;
  }
  if (!saida.id && saida.link) {
    // Sem "wid" no link, usa o id do catalogo (/p/MLB...) ou o link antigo (MLB-123...).
    const achado = saida.link.match(/\/p\/(MLB\d+)/) || saida.link.match(/\/(MLB-\d+)/);
    if (achado) saida.id = achado[1].replace("-", "");
  }
  return saida;
}

function dataBr(iso) {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

const bruto = JSON.parse(fs.readFileSync(arquivoProdutos, "utf8"));
const produtos = (bruto.produtos || []).map(normalizar);

// Um produto sem link ou titulo nao serve para o card.
const validos = produtos.filter((p) => p.link && p.titulo && p.preco);
if (!validos.length) {
  console.error("Nenhum produto valido para gerar o widget.");
  process.exit(1);
}

let texto = fs.readFileSync(arquivoWidget, "utf8");

const novaLista = "  var DADOS = " + JSON.stringify(validos) + ";";
const regexLista = /^[ \t]*var DADOS = \[.*\];[ \t]*$/m;
if (!regexLista.test(texto)) {
  console.error("Nao encontrei a linha 'var DADOS = [...];' no widget.");
  process.exit(1);
}
texto = texto.replace(regexLista, novaLista);

const fonte = path.basename(arquivoProdutos) === "produtos.json" ? "listalinks.txt" : arquivoProdutos;
const linhaResumo =
  `  Gerado em ${dataBr(bruto.gerado_em || Date.now())} | ${validos.length} produtos | fonte: ${fonte}`;
const regexResumo = /^[ \t]*Gerado em .*\|\s*\d+ produtos \| fonte: .*$/m;
if (regexResumo.test(texto)) {
  texto = texto.replace(regexResumo, linhaResumo);
} else {
  console.warn("Aviso: linha 'Gerado em ...' nao encontrada; cabecalho nao atualizado.");
}

fs.writeFileSync(arquivoWidget, texto, "utf8");

// Conferencia: a lista gravada precisa ser JSON valido.
const conferido = texto.match(/^[ \t]*var DADOS = (\[.*\]);[ \t]*$/m);
const lista = JSON.parse(conferido[1]);
console.log(`widget atualizado: ${arquivoWidget}`);
console.log(`produtos no DADOS: ${lista.length}`);
const semPrecoAnterior = lista.filter((p) => !p.preco_anterior).length;
const semLoja = lista.filter((p) => !p.loja).length;
const comFrete = lista.filter((p) => p.frete_gratis).length;
console.log(
  `cobertura: preco anterior ${lista.length - semPrecoAnterior}/${lista.length} | loja ${lista.length - semLoja}/${lista.length} | frete gratis ${comFrete}/${lista.length}`
);
if (bruto.falhas && bruto.falhas.length) {
  console.log(`links com falha na extracao: ${bruto.falhas.length}`);
}
