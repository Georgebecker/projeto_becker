# Projeto Becker

**Este é um projeto novo** — a base está pronta (documentação, regras de ouro, configuração
e pastas de trabalho). O próximo passo é definir o objetivo — o que vamos construir — e começar.

---

**Autor:** George Herman Becker
**Gestão em Tecnologia da Informação**


**Apoie o autor:**
- **PIX:** `a8b68e14-edfe-4450-88f2-c2af4aca2a6c`
- **Buy Me a Coffee:** <https://buymeacoffee.com/georgehbecker>
- **LinkedIn:** <https://www.linkedin.com/in/georgehbecker/>

---

## O que tem aqui (por enquanto)

- `docs/REGRAS_DE_OURO.md` — as regras de ouro: o jeito certo de fazer, que vale para tudo que este projeto produzir.
- `.env` / `.env.example` — configuração do projeto (caminhos, banco de dados, APIs), sem segredo no repositório.
- `.githooks/` — ganchos de proteção do git: bloqueiam o `.env` no commit **e** no envio ao remoto (ativar em um clone novo: `git config core.hooksPath .githooks` ou `.githooks\instalar.ps1`).
- Pastas-base prontas para crescer: `data/raw`, `data/processed`, `data/descartados`, `notebooks`.

## Estrutura prevista (vai evoluir com o projeto)

```
projeto_becker/
├── .env / .env.example        # configuração (nunca commitar o .env)
├── .githooks/                 # ganchos de proteção (bloqueiam .env no commit e no envio)
├── README.md                  # este arquivo
├── docs/                      # documentação e regras de ouro
├── data/
│   ├── raw/                   # dados brutos (nunca alterar)
│   ├── processed/             # dados tratados/limpos
│   └── descartados/           # fora de circulação (nunca apagar)
├── notebooks/                 # análises exploratórias (.ipynb)
├── src/                       # código reutilizável (cresce depois)
└── sql/                       # consultas e schemas SQL (cresce depois)
```

## Requisitos

- **Git** — com os ganchos de proteção ativos (`git config core.hooksPath .githooks`).
- **Python 3.8+** — para scripts e automações (o ambiente `.venv` já está criado neste projeto).
- As demais ferramentas entram quando o objetivo do projeto for definido.

## Comece por aqui

1. Leia [`docs/REGRAS_DE_OURO.md`](docs/REGRAS_DE_OURO.md) — o contrato de trabalho do projeto.
2. O `.env` já está criado neste projeto (e nunca vai ao git); em um clone novo, copie `.env.example` para `.env` e ajuste os valores.
3. Use `data/raw` para o que vier bruto e `data/processed` só para o que for tratado e validado.
4. Nunca apague nada: se não servir mais, mova para uma pasta de descarte (ex.: `data/descartados/`).

## Próximos passos

- [ ] Definir o objetivo do projeto (o que vamos construir).
- [ ] Começar pelo primeiro entregável.

---
