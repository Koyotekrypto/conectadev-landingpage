# Checklist SEO/GEO – Implementado

Conforme plano (prompt-17.txt). Validação pós-implementação.

## Verificações técnicas
- [x] Estrutura do projeto mapeada (index.html + páginas TSX)
- [x] Meta tags: título, description, keywords em index.html e por rota (react-helmet-async)
- [x] Schema markup: Organization + WebSite em index.html; FAQPage, Article (Blog/Case) por rota
- [x] Headings: H1 único por página (Home, FAQ, Cases, Blog); Hero decorativo sem H1
- [x] robots.txt criado em public/ (User-agent *, GPTBot, ChatGPT-User, CCBot, etc., Sitemap)
- [x] sitemap.xml criado em public/ (/, /faq, /cases, /blog, casos e posts estáticos)

## Conteúdo
- [x] Cada página principal responde a 1 pergunta principal (H1 conversacional)
- [x] Resposta direta após H1 em Home, FAQ, Cases, Blog
- [x] Hierarquia H1 > H2 > H3 respeitada
- [x] FAQ com perguntas e respostas em linguagem natural; FAQPage schema na rota /faq
- [x] Linguagem natural; termos técnicos com contexto

## Meta e crawlers
- [x] Title único e conversacional por rota
- [x] Meta description que responde à pergunta da página
- [x] Meta robots, googlebot, bingbot, ai-content-type (commercial/informational)
- [x] Fonte de meta: `src/data/seoContent.ts`; rotas dinâmicas (Case, BlogPost) com getCaseSeo/getBlogPostSeo

## Schema
- [x] JSON-LD global (Organization, WebSite) em index.html
- [x] FAQPage em /faq (Helmet)
- [x] Article em BlogPost e CaseDetail (Helmet)
- [x] Validar em validator.schema.org e Google Rich Results Test (manual)

## Imagens
- [x] alt descritivo em todas as imagens revisadas (Blog, Cases, CaseDetail, Portfolio, Hero, Footer, Navbar, Authority, Testimonials, Partners)
- [x] title quando aplicável
- [x] loading="lazy" e decoding="async" onde adequado

## Build e testes
- [x] `npm run build` concluído com sucesso
- [x] `npm run test` – 14 testes passando

## Arquivos criados/alterados (resumo)
- **Criados:** `docs/SEO-VERIFICACOES-E-ETAPA1.md`, `docs/SEO-PLAN-ETAPA2.md`, `docs/SEO-CHECKLIST-IMPLEMENTADO.md`, `src/data/seoContent.ts`, `src/components/seo/PageSEO.tsx`, `public/robots.txt`, `public/sitemap.xml`
- **Alterados:** `index.html`, `src/main.tsx`, `src/App.tsx` (não alterado; HelmetProvider em main), `src/pages/Home.tsx`, `src/pages/FAQ.tsx`, `src/pages/Cases.tsx`, `src/pages/Blog.tsx`, `src/pages/CaseDetail.tsx`, `src/pages/BlogPost.tsx`, `src/components/sections/NewHero.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/FAQ.tsx` (não alterado; schema na página), componentes de imagens (Footer, Navbar, Portfolio, Authority, Hero, Testimonials, Partners, Blog, Cases, CaseDetail, BlogPost), `src/pages/Blog.test.tsx`, `src/pages/Cases.test.tsx`
