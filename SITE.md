# CONECTADEV Site Structure

## Overview
SPA multi-página (React + Vite + Tailwind) com tema "Obsidian Elite". ConectaDev = agência de desenvolvimento de software (design cinematográfico + engenharia de software). Cases de sucesso em destaque: **SOAPIA** (healthtech/clínicas), **VIBEFOOD** (gastronomia/restaurantes) e **Luane Nascimento | Advocacia** (site institucional · direito empresarial). Portfolio e lead generation com funil qualificado.

## Rotas (Páginas)
| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Landing com 12 seções |
| `/blog` | Blog | Listagem de artigos (Sanity + fallback contentData) |
| `/blog/:slug` | BlogPost | Post individual |
| `/cases` | Cases | Listagem de casos de sucesso |
| `/cases/:slug` | CaseDetail | Detalhe do case |
| `/clinicas` | Redirect | Redireciona para `/cases/soapia-ai` (case SOAPIA) |
| `/restaurantes` | Redirect | Redireciona para `/cases/vibefood` (case VIBEFOOD) |
| `/faq` | FAQ | Perguntas frequentes + Processo de Trabalho + Contato |

Os nichos Clínicas e Restaurantes são apresentados como **cases** na página Cases (SOAPIA AI e VIBE FOOD™); não existem mais abas próprias no menu.

## Layout global
- **Navbar** (`components/layout/Navbar`): header fixo, logo, links (Serviços, Blog, Cases, FAQ), CTA "Agende uma Sessão", menu mobile.
- **Footer** (`components/layout/Footer`): links legais, branding, contato.
- **ScrollToTop** e **CustomCursor** (desktop apenas).

## Seções da Home (ordem de cima para baixo)
1. **NewHero** – Hero com ShaderAnimation, headline principal, CTAs.
2. **Hero** – Segunda dobra: headline "Sistema que performa. Dados seguros. Tech de ponta.", apoio "Deixamos a planilha no passado. React, Vite, Tailwind e Shadcn UI.", pill de clientes (logos Notion, Stripe, Vercel + "Clientes satisfeitos que confiam no nosso trabalho").
3. **HeroPreview** – Bloco com efeito Compare (antes/depois), glow primary, card escuro com borda luminosa. Rodapé do card: "ConectaDev" e "Sua empresa na web com design e tecnologia de ponta" (texto fora da imagem).
4. **Manifesto** – Posicionamento e narrativa.
5. **Services** – Pilares de serviço (UI/UX, Sites e Landing Pages, Dev Web e SaaS, SEO, DevOps) com ElectricCard e Lamp.
6. **Portfolio** – Cases em destaque (SOAPIA, VIBEFOOD, Luane Nascimento) com DeviceMockup e atalho para `/cases`. Modal ao clicar: para SOAPIA e VIBEFOOD exibe a **landing page no iframe** com rolagem automática; para demais projetos exibe carrossel de imagens. Painel à direita com abas Visão Geral (descrição + Funcionalidades do sistema) e Impacto (KPIs), botão "Agendar Sessão" e "Acessar Plataforma Web".
7. **ExpertiseReveal** – Capabilities Tecnológicas: quatro áreas (Arquitetura Cloud, I.A. e Dados, SaaS Premium, Automações). Cada item clicável: scroll/navega para `#contact` e grava `conectadev_interest` no sessionStorage.
8. **Stats** – Três pilares qualitativos (Foco em resultado, Parceria de longo prazo, Excelência em cada entrega). Sem números; mensagens alinhadas à VISION.
9. **Marquee** – Faixa em loop com: Design UI/UX, Arquitetura Cloud, I.A. e Dados, SaaS Premium, Automações, Sites e Landing Pages, SEO e Performance, DevOps e Infraestrutura.
10. **Process** – Nosso Processo de Trabalho (Briefing, Ideia, Desenvolvimento, Entrega). Cards com efeito 3D no hover; clique leva a `#contact` e grava passo em `conectadev_interest` (ex.: processo-briefing).
11. **Partners** – Tecnologias e plataformas que utilizamos: logos oficiais (Simple Icons CDN): Google, Meta, Firebase, Firestore, Anthropic, React, TypeScript, Vite, Tailwind CSS, Figma, Sanity. Grayscale por padrão, cor no hover.
12. **Testimonials** – Depoimentos.
13. **Contact** – CTA final + **LeadFunnel** (funil de qualificação por nicho, Formspree + WhatsApp).

## Página FAQ (`/faq`)
- Accordion de perguntas frequentes (6 itens, conteúdo alinhado à VISION; inclui "Como funciona o processo?" com link para `#process`).
- Seção **Process** (mesmos 4 passos clicáveis; em `/faq` o clique faz scroll para `#contact` na mesma página).
- Seção **Contact**.

## Fonte de dados
- **Blog**: Sanity CMS (`blogPost`) via `useBlogPosts()`; fallback para `src/data/contentData.ts`. Pipeline de agregação em `scripts/blog-aggregator/`.
- **Cases / Portfolio**: `src/data/contentData.ts` com `CASE_STUDIES` (SOAPIA, VIBEFOOD, Luane Nascimento) e `PROJECT_FEATURES` por slug (`soapia-ai`, `vibefood`, `luane-nascimento-advogados`). Interface `CaseStudy` inclui `image`, `images?`, `link?`, `features?`. Portfolio consome Sanity (`project`) quando disponível; fallback para mocks com normalização de imagens/features por título.
- **Funil**: `src/constants/funnelPaths.ts` (perfis e passos dinâmicos por nicho).
- **SessionStorage**: `conectadev_interest` gravado ao clicar em área de expertise (ExpertiseReveal) ou passo do processo (Process); uso no formulário de contato é opcional (pré-preenchimento ou envio no payload).

## Página Cases e CaseDetail
- **Cases** (`/cases`): Cards com pré-visualização usando imagem do case (`/assets/projects/soapia/1.png`, `vibefood/1.png`, `luane/1.png`), categoria, título, descrição e resultados.
- **CaseDetail** (`/cases/:slug`): Conteúdo com parser de headings `# Título`; métricas em cards; Principais Entregas; seção **Funcionalidades do sistema** (lista com checkmarks); carrossel de imagens no preview (quando `study.images`); sidebar com CTA "Visitar site" (se `study.link`) e "Agendar Mentoria"; CTA final "Quer um site como este?" para Luane, "Quer um sistema como este?" para os demais; Serviços Aplicados com ícones; animações de entrada em sequência.
- **Imagens de projetos**: `public/assets/projects/soapia/`, `vibefood/`, `luane/` (Compare em `public/assets/compare/`).

## Alterações recentes (pós-último commit)
- Hero: headline e apoio atualizados; pill de clientes com logos e texto "Clientes satisfeitos que confiam no nosso trabalho".
- HeroPreview: nova seção com Compare (antes/depois), glow e card; texto de marca no rodapé da imagem (ConectaDev), sem overlay sobre a imagem.
- Componente Compare: slider antes/depois (hover), ícone GripVertical, gradiente.
- Portfolio: modal com iframe (landing + rolagem automática) para SOAPIA e VIBEFOOD; carrossel de imagens para Luane; botão Agendar Sessão; funcionalidades no painel; terceiro case Luane Nascimento (site institucional).
- CaseDetail: identidade visual primary; conteúdo com headings a partir de `#`; seção Funcionalidades; CTA "Visitar site" e CTA final contextual (site vs sistema); carrossel no preview; link opcional em CaseStudy.
- Cases: imagens dos projetos na pré-visualização dos cards.
- Novo case: Luane Nascimento | Advocacia (slug `luane-nascimento-advogados`), link para site, features focadas em conversão e captura de leads.
