# ETAPA 2 – Plano Estratégico SEO/GEO

## 2.1 Mapa de palavras-chave / perguntas por página

### Home
- **Pergunta principal**: "Como ter desenvolvimento de software e inteligência empresarial de alto impacto?"
- **Perguntas secundárias**: "O que é engenharia de software de elite?", "Quanto custa um projeto sob medida?", "Onde encontrar agência especializada em clínicas e restaurantes?", "Como funciona o processo de trabalho?"
- **Keywords conversacionais**: "como resolver problemas de software de forma prática", "melhor agência de desenvolvimento para clínicas e restaurantes", "desenvolvimento de software com IA empresarial"

### FAQ
- **Pergunta principal**: "Vale a pena terceirizar desenvolvimento para uma agência web?"
- **Perguntas secundárias**: (as 6 já presentes no componente FAQ)
- **Keywords**: "terceirizar desenvolvimento web", "agência web vale a pena", "processo de trabalho desenvolvimento"

### Cases
- **Pergunta principal**: "Quais resultados a ConectaDev entrega em projetos reais?"
- **Perguntas secundárias**: "O que é SOAPIA AI?", "O que é VIBE FOOD?", "Como é um case de sucesso em software?"
- **Keywords**: "casos de sucesso desenvolvimento software", "gestão clínica com IA", "sistema para restaurante"

### Case Detail (template)
- **Pergunta principal**: "[Nome do produto]: o que é e que resultados gera?"
- **Keywords**: nome do produto + "case", "solução", "resultados"

### Blog
- **Pergunta principal**: "Onde encontrar insights de engenharia e IA empresarial?"
- **Keywords**: "blog engenharia de software", "IA empresarial", "insights tecnologia"

### Blog Post (template)
- **Pergunta principal**: Título do artigo (pergunta ou afirmação clara).
- **Keywords**: categoria + termos do título.

---

## 2.2 Plano de Structured Data (Schema)

### Global (todas as páginas)
- **Organization**: name, url, description, address (opcional), contactPoint (email, telephone, contactType: "customer service").
- **WebSite**: name, url, description, potentialAction SearchAction (se houver URL de busca; senão omitir).

### Por tipo de página
- **FAQ**: FAQPage com mainEntity[] de Question + acceptedAnswer (Answer com text).
- **Blog Post**: Article (headline, author Person, datePublished, dateModified).
- **Case Detail**: Article ou Service; preferir Article com headline = título do case, description, author Organization.

### Onde injetar
- Global: `index.html` (script application/ld+json no head) ou componente root com Helmet.
- Por rota: react-helmet-async (script JSON-LD no Helmet) para FAQPage, Article em BlogPost e CaseDetail.

---

## 2.3 Estratégia de conteúdo para IA
- Home: bloco de resposta direta após H1 (1–2 frases) + seções Como funciona, Benefícios, FAQ embutido ou link.
- FAQ: manter perguntas em linguagem natural; respostas diretas no início de cada item.
- Cases/Case Detail: resumo em 1–2 frases no topo; listas e bullets para benefícios e resultados.
- Linguagem: evitar jargão sem explicação; primeira menção de termo técnico com definição curta.
