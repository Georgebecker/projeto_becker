// Compara os links coletados do painel de afiliados (data/raw/hub_links.json) com o
// listalinks.txt e, com --aplicar, grava a lista atualizada.
//
// Uso:
//   node scripts/aplicar_links_hub.js            (so mostra o diff)
//   node scripts/aplicar_links_hub.js --aplicar  (grava listalinks.txt)
const fs = require("fs");
const path = require("path");

const COLETADO = path.join("data", "raw", "hub_links.json");
const LISTA = "listalinks.txt";
const aplicar = process.argv.includes("--aplicar");

// Guarda apenas o link curto canonico: https://meli.la/<codigo>
function canonico(link) {
  const curto = link.match(/meli\.la\/([A-Za-z0-9_\-]+)/);
  if (curto) return `https://meli.la/${curto[1]}`;
  return null;
}

if (!fs.existsSync(COLETADO)) {
  console.error("Nada coletado ainda:", COLETADO);
  process.exit(1);
}

const coletado = JSON.parse(fs.readFileSync(COLETADO, "utf8"));
const novos = new Set();
for (const item of coletado.links || []) {
  const link = canonico(item.link);
  if (link) novos.add(link);
}

const atuais = fs
  .readFileSync(LISTA, "utf8")
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean);
const atuaisSet = new Set(atuais);

const acrescentar = [...novos].filter((l) => !atuaisSet.has(l));
const soNoArquivo = [...atuaisSet].filter((l) => !novos.has(l));

console.log(`coletados no painel: ${novos.size}`);
console.log(`ja no listalinks.txt: ${novos.size - acrescentar.length}`);
console.log(`novos a acrescentar: ${acrescentar.length}`);
for (const l of acrescentar) console.log("  + " + l);
console.log(`no arquivo e ausentes no painel: ${soNoArquivo.length} (mantidos, nada e apagado)`);

if (aplicar && acrescentar.length) {
  const linhas = [...atuais, ...acrescentar];
  fs.writeFileSync(LISTA, linhas.join("\n") + "\n", "utf8");
  console.log(`listalinks.txt atualizado: ${atuais.length} -> ${linhas.length} linhas`);
} else if (aplicar) {
  console.log("nada novo para aplicar");
}
