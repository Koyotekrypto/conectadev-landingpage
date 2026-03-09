# Plano de Implementação (baseado no diagnóstico)

Plano em **fases** para evitar concorrência de prioridade. Fases 1–3 foram executadas nesta rodada.

---

## Fase 1 – Correção de erros e limpeza (concluída)

- **Tipos do funil:** Definidos `FunnelOption` e `FunnelStepDefinition` em `src/constants/funnelPaths.ts`, removido o auto-import circular.
- **E-commerce:** Adicionado fluxo completo `ecommerce` em `funnelPathsMap` (subniche, pain, maturity).
- **Código morto:** Removidos `src/components/Navbar.tsx` e `src/components/Footer.tsx` (não usados; App usa `layout/Navbar` e `layout/Footer`).

---

## Fase 2 – Documentação e consistência (concluída)

- **SITE.md:** Atualizado com rotas reais, seções da Home (13 seções) e fontes de dados (contentData, Sanity, funnelPaths).
- **Tailwind:** Adicionada `fontFamily.drama` (Playfair Display) para a classe `font-drama`.
- **BACKLOG:** Itens “cursor customizado” e “transições Framer Motion” marcados como concluídos; histórico atualizado com a auditoria e implementação.

---

## Fase 3 – Alinhamento design/docs (concluída)

- **docs/DESIGN.md:** Paleta e tipografia alinhadas ao código (primary #CEF02E, Inter/Playfair, `font-drama`).
- **docs/03-design/DESIGN_SYSTEM.md:** Tokens e tipografia atualizados para refletir `tailwind.config.js` e uso de `font-drama`.

---

## Requisito estratégico: Blog com atualização diária automática

**Objetivo:** O blog deve ser atualizado **diariamente** com as **principais notícias relevantes em âmbito mundial** sobre desenvolvimento de software e tecnologia, de interesse ao público-alvo (empresários, gestores, inteligência empresarial). A atualização deve ser **automática** (sem publicação manual diária).

**Implicações para o plano:**
- **Fonte de conteúdo:** Não basta conteúdo estático em `contentData.ts`. É necessário um pipeline automático: agregar notícias (RSS, APIs de notícias, agregadores), filtrar/curar por relevância (software, tech, negócios), formatar e publicar no CMS ou na fonte que alimenta o blog.
- **Frequência:** Job agendado (cron, serverless diário) para buscar, processar e inserir/atualizar posts.
- **Critérios de relevância:** Desenvolvimento de software, tecnologia empresarial, tendências de mercado, IA, engenharia de software — alinhados à persona ConectaDev.
- **Automação:** Integração com Sanity (ou outro CMS) é recomendada para receber os posts gerados/agregados; alternativa: pipeline que gera arquivos ou atualiza um repositório de conteúdo que o site consome.

Este requisito afeta diretamente a **Fase 4 (Dados e conteúdo)** e deve ser considerado na decisão “Blog estático vs Sanity”: para atualização diária automática, uma fonte dinâmica (CMS + pipeline) é necessária.

---

## Fase 4 – Dados e conteúdo (concluída)

- **Decisão documentada:** Blog → Sanity (`blogPost`) + pipeline automático; Cases → mantidos em `contentData.ts`. [docs/ARCHITECTURE.md](ARCHITECTURE.md) atualizado.
- **Schema Sanity:** Criado `cms/schemaTypes/blogPost.ts` (título, slug, description, content, date, category, image, author, sourceUrl, sourceName, isAggregated).
- **Curadoria:** [docs/CURADORIA_BLOG.md](CURADORIA_BLOG.md) com critérios de relevância, limites (10–15 posts/execução), deduplicação e fontes sugeridas.
- **Script pipeline:** `scripts/blog-aggregator/run.mjs` — busca RSS (TechCrunch, dev.to, GitHub Blog, Stack Overflow Blog), filtra por palavras-chave, cria até 10 `blogPost` no Sanity. README com variáveis de ambiente e como agendar (cron, Vercel, GitHub Actions). Comando: `npm run blog:aggregate` (requer `SANITY_API_TOKEN` com write).
- **Frontend:** Hook `useBlogPosts()` em [useSanityQueries.ts](src/hooks/useSanityQueries.ts); [Blog](src/pages/Blog.tsx) e [BlogPost](src/pages/BlogPost.tsx) consomem do Sanity com fallback para `contentData.ts`. Posts agregados exibem “Leia a notícia completa” (sourceUrl) e nome da fonte.
- **Pendente (opcional):** Firestore para leads; agendamento real do job (cron/serverless) depende do ambiente de deploy.

---

## Fase 5 – Melhorias opcionais (concluída – revisão de abas)

- **Sub-páginas Clínicas e Restaurantes (revertido):** Clínicas e Restaurantes foram removidos como abas independentes do menu; são cases (SOAPIA AI e VIBE FOOD™) exibidos em `/cases`. Rotas `/clinicas` e `/restaurantes` no [App](src/App.tsx) foram substituídas por redirects para `/cases/soapia-ai` e `/cases/vibefood`. [Navbar](src/components/layout/Navbar.tsx) e [Footer](src/components/layout/Footer.tsx) exibem apenas Serviços, Blog, Cases, FAQ (e no footer: Início, Serviços, Cases, Blog, FAQ, Como funciona, Contato). Páginas Clinicas.tsx e Restaurantes.tsx foram removidas.
- **theme-color:** Adicionado `<meta name="theme-color" content="#0e1111" />` no [index.html](index.html) para barra de status/UI do browser em mobile.
- **Pendente para depois:** Medir Core Web Vitals (LCP, FID, CLS) e ajustar performance; revisar CTAs por página (foco em uma conversão principal por rota).

---

## Resumo: entregas do blog automático (dentro da Fase 4)

| Entrega | Descrição |
|--------|------------|
| CMS para blog | Sanity (ou outro) com schema para posts agregados (título, resumo, link original, data, fonte, categoria). |
| Fontes de notícias | Lista de RSS/APIs (ex.: TechCrunch, HN, dev.to, GitHub Blog; opcional: fontes PT-BR). |
| Job diário | Script ou serverless que roda 1x/dia: fetch → filtro (software, tech, negócios) → deduplicação → criar/atualizar posts no CMS. |
| Frontend | Blog e BlogPost consumindo do CMS (já preparado se migrar para Sanity na Fase 4). |
| Curadoria | Doc com critérios de relevância e limite de posts por dia. |

---

## Alinhamento de posicionamento (concluído)

Documentação e conteúdo do site alinhados ao posicionamento real da ConectaDev: agência de desenvolvimento de software (ecossistema de elite — design cinematográfico + engenharia de software); **SOAPIA** e **VIBEFOOD** como cases de sucesso principais; **clínicas** e **restaurantes** como especialização comprovada. Atualizados: [VISION](docs/01-product/VISION.md), [PRODUCT](docs/PRODUCT.md), [SITE](SITE.md), [ARCHITECTURE](docs/ARCHITECTURE.md), [BACKLOG](docs/01-product/BACKLOG.md) e [contentData.ts](src/data/contentData.ts) (Cases = SOAPIA AI e VIBE FOOD™ apenas).

---

## Pendências a fazer depois

Pendências consolidadas e priorizadas em **[PLANO_DE_EVOLUCAO.md](PLANO_DE_EVOLUCAO.md)**. Resumo abaixo:

Itens de impacto e pendentes pós–Fase 4, a executar quando for possível:

- **Impacto**
  - **Blog dinâmico:** o site pode ser atualizado diariamente via job agendado (cron/serverless) que roda o script; o frontend já consome Sanity e faz fallback para os posts estáticos.
  - **Cases:** sem mudança; continuam em `contentData.ts`.
  - **Sanity:** é preciso rodar o deploy do schema (ex.: `cd cms && npx sanity deploy` ou equivalente) para o tipo `blogPost` existir no projeto; depois, gerar um token com permissão de escrita e configurar o agendamento do script onde o site for hospedado.

- **Pendente (opcional)**
  - Firestore para captura de leads (continua como no plano).
  - Usar `sessionStorage.getItem('conectadev_interest')` no formulário de contato (LeadFunnel) para pré-preencher ou enviar "área de interesse" no payload do lead.
  - Agendar o job (cron/Vercel/GitHub Actions) no ambiente em que o site e o script forem executados.
  - Medir Core Web Vitals (LCP, FID, CLS) e ajustar performance.
  - Revisar CTAs por página (foco em uma conversão principal por rota).

---

## Evoluções pós-Fase 5 (concluídas)

- **FAQ em aba:** FAQ movida para rota `/faq`. Link "FAQ" na Navbar aponta para `/faq`. Home deixou de exibir a seção FAQ. Página `/faq` contém: accordion de perguntas frequentes (6 itens, conteúdo melhorado e alinhado à VISION), seção Process e Contact. Clique nos passos do Process em `/faq` faz scroll para `#contact` na mesma página.
- **Conteúdo FAQ:** Textos das respostas revisados; duas novas perguntas ("Como funciona o processo de trabalho?" com CTA para `#process`; "Vocês atendem apenas clínicas e restaurantes?"). Respostas podem incluir ReactNode (ex.: link "Conheça cada etapa").
- **Process (Nosso Processo de Trabalho):** Conteúdo alinhado à VISION (briefing, ideia, desenvolvimento, entrega). Cada card é clicável: scroll/navega para `#contact` e grava em `sessionStorage` o slug do passo (`conectadev_interest`: processo-briefing, processo-ideia, etc.). Efeito 3D no hover (inclinação seguindo o mouse). Acessibilidade: role="button", teclado, aria-label. Em `/` e `/faq` o clique faz scroll para #contact; em outras rotas, navigate para `/#contact`.
- **ExpertiseReveal (Capabilities):** Quatro áreas (Arquitetura Cloud, I.A. e Dados, SaaS Premium, Automações) com slug, descrição e clique. Mesmo padrão: scroll/navigate para `#contact` e `sessionStorage` com slug da área. Microcopy "Clique para falar com um especialista" no hover.
- **Stats:** Números (120+, 12k+, 5+ anos) substituídos por três pilares qualitativos: "Foco em resultado", "Parceria de longo prazo", "Excelência em cada entrega". Sem métricas quantificadas; adequado a empresa nova no mercado.
- **Marquee:** Conteúdo da faixa atualizado para: Design UI/UX, Arquitetura Cloud, I.A. e Dados, SaaS Premium, Automações, Sites e Landing Pages, SEO e Performance, DevOps e Infraestrutura.
- **Partners:** Reframe de "Nossos Clientes e Parceiros" para "Tecnologias e plataformas que utilizamos". Logos oficiais via Simple Icons CDN (cdn.simpleicons.org). Lista: Google, Meta, Firebase, Firestore, Anthropic, React, TypeScript, Vite, Tailwind CSS, Figma, Sanity. Grayscale por padrão, cor no hover (wrapper com filtro para consistência).
- **SessionStorage:** Chave `conectadev_interest` usada por ExpertiseReveal e Process para indicar interesse (área ou passo). Uso no formulário de contato (pré-preenchimento ou payload) permanece opcional.

---

## Ordem de execução recomendada

1. Fase 1 → Fase 2 → Fase 3 (feito).
2. Fase 4: definir estratégia de conteúdo; **para blog diário automático:** adotar Sanity (ou CMS) + pipeline de agregação; implementar job diário e curadoria; Cases podem permanecer estáticos ou no mesmo CMS.
3. Fase 5: em paralelo ou após Fase 4, conforme prioridade de negócio.
4. Evoluções pós-Fase 5: conforme listado acima (FAQ em aba, Process 3D/clique, Stats qualitativos, Partners tecnologias, etc.).
