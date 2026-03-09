# CONECTADEV Site Structure

## Overview
SPA multi-página (React + Vite + Tailwind) com tema "Obsidian Elite". ConectaDev = agência de desenvolvimento de software (design cinematográfico + engenharia de software). Cases de sucesso em destaque: **SOAPIA** (healthtech/clínicas) e **VIBEFOOD** (gastronomia/restaurantes). Clínicas e restaurantes são especialização comprovada. Portfolio e lead generation com funil qualificado.

## Rotas (Páginas)
| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Landing com 12 seções |
| `/blog` | Blog | Listagem de artigos (Sanity + fallback contentData) |
| `/blog/:slug` | BlogPost | Post individual |
| `/cases` | Cases | Listagem de casos de sucesso |
| `/cases/:slug` | CaseDetail | Detalhe do case |
| `/clinicas` | Clinicas | Página para nicho Clínicas |
| `/restaurantes` | Restaurantes | Página para nicho Restaurantes |
| `/faq` | FAQ | Perguntas frequentes + Processo de Trabalho + Contato |

## Layout global
- **Navbar** (`components/layout/Navbar`): header fixo, logo, links (Serviços, Blog, Cases, Clínicas, Restaurantes, FAQ), CTA, menu mobile. FAQ aponta para `/faq`.
- **Footer** (`components/layout/Footer`): links legais, branding, contato.
- **ScrollToTop** e **CustomCursor** (desktop apenas).

## Seções da Home (ordem de cima para baixo)
1. **NewHero** – Hero com ShaderAnimation, headline principal, CTAs.
2. **Hero** – Segunda dobra (valor, confiança).
3. **Manifesto** – Posicionamento e narrativa.
4. **Services** – Pilares de serviço (UI/UX, Sites e Landing Pages, Dev Web e SaaS, SEO, DevOps) com ElectricCard e Lamp.
5. **Portfolio** – Cases em destaque (SOAPIA, VIBEFOOD) com atalho para `/cases`.
6. **ExpertiseReveal** – Capabilities Tecnológicas: quatro áreas (Arquitetura Cloud, I.A. e Dados, SaaS Premium, Automações). Cada item clicável: scroll/navega para `#contact` e grava `conectadev_interest` no sessionStorage.
7. **Stats** – Três pilares qualitativos (Foco em resultado, Parceria de longo prazo, Excelência em cada entrega). Sem números; mensagens alinhadas à VISION.
8. **Marquee** – Faixa em loop com: Design UI/UX, Arquitetura Cloud, I.A. e Dados, SaaS Premium, Automações, Sites e Landing Pages, SEO e Performance, DevOps e Infraestrutura.
9. **Process** – Nosso Processo de Trabalho (Briefing, Ideia, Desenvolvimento, Entrega). Cards com efeito 3D no hover; clique leva a `#contact` e grava passo em `conectadev_interest` (ex.: processo-briefing).
10. **Partners** – Tecnologias e plataformas que utilizamos: logos oficiais (Simple Icons CDN): Google, Meta, Firebase, Firestore, Anthropic, React, TypeScript, Vite, Tailwind CSS, Figma, Sanity. Grayscale por padrão, cor no hover.
11. **Testimonials** – Depoimentos.
12. **Contact** – CTA final + **LeadFunnel** (funil de qualificação por nicho, Formspree + WhatsApp).

## Página FAQ (`/faq`)
- Accordion de perguntas frequentes (6 itens, conteúdo alinhado à VISION; inclui "Como funciona o processo?" com link para `#process`).
- Seção **Process** (mesmos 4 passos clicáveis; em `/faq` o clique faz scroll para `#contact` na mesma página).
- Seção **Contact**.

## Fonte de dados
- **Blog**: Sanity CMS (`blogPost`) via `useBlogPosts()`; fallback para `src/data/contentData.ts`. Pipeline de agregação em `scripts/blog-aggregator/`.
- **Cases / Portfolio**: `src/data/contentData.ts` (Cases SOAPIA e VIBEFOOD); Portfolio pode consumir Sanity (`project`) via `useSanityQueries`.
- **Funil**: `src/constants/funnelPaths.ts` (perfis e passos dinâmicos por nicho).
- **SessionStorage**: `conectadev_interest` gravado ao clicar em área de expertise (ExpertiseReveal) ou passo do processo (Process); uso no formulário de contato é opcional (pré-preenchimento ou envio no payload).
