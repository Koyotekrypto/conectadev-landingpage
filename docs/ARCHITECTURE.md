# ARCHITECTURE OVERVIEW

## System Components
- **Frontend**: React + Vite + `react-router-dom`. Architecture evolved from a single-page landing page to a multi-page ecosystem (`/`, `/blog`, `/cases`).
- **Structure**: Modular components in `src/components/` (sections and UI) and page-level components in `src/pages/`.
- **Data Layer**: `src/data/contentData.ts` serves as the Single Source of Truth for marketing content, blog posts, and case studies.
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
