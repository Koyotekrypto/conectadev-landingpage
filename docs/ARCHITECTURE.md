# ARCHITECTURE OVERVIEW

## System Components
- **Frontend**: React + Vite + `react-router-dom`. Architecture evolved from a single-page landing page to a multi-page ecosystem (`/`, `/blog`, `/cases`, `/clinicas`, `/restaurantes`, `/faq`).
- **Structure**: Modular components in `src/components/` (sections and UI) and page-level components in `src/pages/`.
- **Data Layer (decisão Fase 4):**
  - **Blog:** Sanity CMS (`blogPost`) + pipeline automático diário (RSS/APIs → filtro → Sanity). O frontend consome do Sanity com fallback para `contentData.ts` quando não houver posts no CMS.
  - **Cases:** Mantidos em `src/data/contentData.ts` (conteúdo editorial manual). Cases de sucesso principais: SOAPIA e VIBEFOOD. Opcional migrar para Sanity no futuro.
  - **Portfolio:** Sanity (`project`) via `useSanityQueries`.
- **Styling**: Tailwind CSS with custom variables and a "Total Obsidian Elite" theme.

## Design System & Localization
- **Theme**: "Total Obsidian Elite" (V8.0) - Foco em tons monocromáticos (Slate 950, Zinc, Black) com accent laranja, proporcionando visual premium e cinematográfico.
- **Localization**: Todo estruturado em PT-BR para ressonância com o mercado nacional (Desenvolvimento e inteligência EMPRESARIAL).

## MCP Infrastructure
- **Stitch MCP**: Remote server proxy for specialized Google-powered tools. Used to generate and assemble the high-end landing page.
- **Firecrawl MCP**: Local node-based MCP server for high-performance web scraping.
- **Premium Components**: `ShaderAnimation` (Three.js), `RevealImageList`, `Lamp` Elite, `ElectricCard`, `DeviceMockup`, and `VapourTextEffect` (Canvas-based particles).
- **Media Engine**: `DeviceMockup` now features a high-performance image carousel with lateral transitions, auto-play (1.5s), and stability rules for continuous asset display.
- **Asset Structure**: Projects media organized in `public/assets/projects/{project-id}/` with numerical sequence (`1.png`, `2.png`, etc.).
- Connected via `mcp_config.json` in the `.gemini/antigravity` directory.

## Lead context (sessionStorage)
- **Chave:** `conectadev_interest`. Gravação ao clicar em uma área de especialidade (ExpertiseReveal) ou em um passo do processo (Process). Valores exemplos: `arquitetura-cloud`, `processo-briefing`.
- **Uso:** Scroll/navegação para `#contact`; o valor pode ser lido pelo formulário de contato para pré-preenchimento ou envio no payload do lead (opcional).
