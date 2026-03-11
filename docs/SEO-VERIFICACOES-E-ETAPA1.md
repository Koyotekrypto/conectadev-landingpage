# Verificações Técnicas e ETAPA 1 – Análise Completa do Site ConectaDev

## Verificações obrigatórias (executadas)

### 1. Estrutura do projeto
- **HTML**: `index.html` (único ponto de entrada).
- **Páginas (TSX)**: `src/pages/Home.tsx`, `Blog.tsx`, `BlogPost.tsx`, `Cases.tsx`, `CaseDetail.tsx`, `FAQ.tsx`.
- **Rotas**: `/`, `/blog`, `/blog/:slug`, `/cases`, `/cases/:slug`, `/faq` (+ redirects `/clinicas`, `/restaurantes`).

### 2. Meta tags existentes
- **Local**: apenas em `index.html`.
- **Conteúdo**: `title`, `description`, `keywords`, `author`; Open Graph e Twitter Card.
- **Ausente**: meta por rota (SPA); meta para crawlers de IA (`robots` avançado, `googlebot`, `bingbot`, `ai-content-type`).

### 3. Schema markup
- **Resultado**: Nenhum `application/ld+json` ou referência a schema.org no projeto.
- **Ação**: Inserir Organization + WebSite no global; FAQPage na FAQ; Article em Blog/Case detail.

### 4. Headings e semântica
- **Home**: Múltiplos H1 (Hero: "CONECTA" decorativo + título principal; NewHero). Necessário unificar H1 por página.
- **Cases**: H1 "Casos de Sucesso"; CaseDetail: H1 com título do case.
- **Blog**: H1 "Insights de Engenharia"; BlogPost: H1 com título do post.
- **FAQ**: H2 "Perguntas Frequentes" (sem H1 na página; FAQ page usa H2).
- **Hierarquia**: Vários H2/H3/H4 em seções; garantir que cada página tenha um único H1 lógico e resposta direta.

### 5. robots.txt e sitemap
- **robots.txt**: Ausente em `public/`.
- **sitemap.xml**: Ausente.
- **Ação**: Criar ambos.

---

## ETAPA 1 – Auditoria completa

### 1.1 Auditoria de conteúdo
| Página      | Tema/nicho                    | Pergunta principal (proposta) |
|------------|-------------------------------|--------------------------------|
| Home       | O que a ConectaDev faz        | "Como ter desenvolvimento de software e inteligência empresarial de alto impacto?" |
| FAQ        | Dúvidas sobre agência/processo| "Vale a pena terceirizar desenvolvimento para uma agência web?" |
| Cases      | Casos de sucesso              | "Quais resultados a ConectaDev entrega em projetos reais?" |
| Case Detail| Um case específico            | "O que é [nome do produto] e que resultados gera?" |
| Blog       | Artigos e insights            | "Onde encontrar insights de engenharia e IA empresarial?" |
| Blog Post  | Um artigo                     | Título do post como pergunta ou afirmação clara |

- **FAQ**: Já existe bloco de perguntas/respostas em `FAQ.tsx`; conteúdo em linguagem natural.
- **Lacuna**: Home não abre com pergunta + resposta direta; FAQ page não tem H1.

### 1.2 Auditoria de meta tags
- **Home (index atual)**: Title e description genéricos; adequar ao formato conversacional.
- **Demais rotas**: Sem meta própria; implementar via react-helmet-async e arquivo de conteúdo SEO.

### 1.3 Auditoria de estrutura semântica
- **article/section/main**: Home usa `<main>`; páginas usam `<main>`; FAQ usa `<section id="faq">`.
- **Breadcrumbs**: Não implementados; opcional para Cases > [nome].
- **Ação**: Garantir H1 único por página e resposta direta após H1 onde aplicável.

### 1.4 Autoridade e expertise
- **Casos**: SOAPIA AI, VIBEFOOD, Luane Nascimento, Thays Morais – demonstram expertise.
- **Testimonials**: Seção "O que nossos clientes dizem".
- **Process**: "Nosso Processo de Trabalho" com etapas.
- **Recomendação**: Manter e reforçar dados concretos (números, links externos) quando relevante.
