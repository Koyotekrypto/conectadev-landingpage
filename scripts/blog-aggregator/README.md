# Pipeline: Blog automático (RSS → Sanity)

Job que busca notícias em **feeds em português** (fontes de confiança), filtra por **últimos 7 dias** e relevância (software, tecnologia), opcionalmente traduz para PT via **LibreTranslate** (API gratuita) e publica no Sanity como `blogPost` (até 45 por execução) com imagem quando disponível no feed. Na página do blog, o usuário pode filtrar por período (7 dias, 30 dias, todas), fonte, categoria e busca.

**Fontes atuais:** Tecnoblog, Canaltech, Inovação Tecnológica, Oficina da Net, Tudo Celular, Buteco Tecnológico.

## Pré-requisitos

- Node 18+
- Token do Sanity com permissão **write** (Create, Replace document). Gerar em: https://www.sanity.io/manage → Project → API → Tokens.

## Variáveis de ambiente

Crie um `.env` na raiz do projeto (ou defina no ambiente onde o cron rodar) com:

```
SANITY_PROJECT_ID=s2g38qvd
SANITY_DATASET=production
SANITY_API_TOKEN=seu_token_com_write

# Opcional: tradução para PT (API gratuita LibreTranslate)
# LIBRE_TRANSLATE_URL=https://libretranslate.com/translate
```

Não commite o token. Use variáveis de ambiente no servidor/cron.

## Instalação de dependência do script

Na raiz do projeto:

```bash
npm install rss-parser --save-dev
```

## Execução manual

Na raiz do projeto:

```bash
node scripts/blog-aggregator/run.mjs
```

Ou com variáveis inline (exemplo):

```bash
SANITY_API_TOKEN=xxx node scripts/blog-aggregator/run.mjs
```

## Agendamento (cron diário)

Para rodar **1x por dia** (ex.: 8h da manhã):

**Linux/macOS (crontab):**
```cron
0 8 * * * cd /caminho/para/conectadev-landingpage && SANITY_API_TOKEN=xxx node scripts/blog-aggregator/run.mjs >> logs/blog-aggregator.log 2>&1
```

**Vercel / serverless:** usar Vercel Cron Jobs (arquivo `vercel.json` com `crons`) chamando um endpoint que executa o script, ou um GitHub Action agendado.

**GitHub Actions:** workflow em [.github/workflows/blog-aggregate.yml](../../.github/workflows/blog-aggregate.yml) — execução diária às 8h UTC (5h BRT) e opção "Run workflow" manual. Configure no repositório: **Settings → Secrets and variables → Actions** → crie o secret `SANITY_API_TOKEN` (obrigatório). Opcionais: `SANITY_PROJECT_ID`, `SANITY_DATASET` (o script usa valores padrão se não definidos).

## Limites e curadoria

Ver [docs/CURADORIA_BLOG.md](../../docs/CURADORIA_BLOG.md): máx. 10–15 posts por execução, deduplicação por URL, palavras-chave de relevância.
