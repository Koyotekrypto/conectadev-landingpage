# Curadoria do blog automático

Critérios e limites para o pipeline que alimenta o blog com notícias diárias (desenvolvimento de software e tecnologia).

## Objetivo

Atualizar o blog **diariamente** com as principais notícias **mundiais** relevantes em:
- Desenvolvimento de software
- Tecnologia empresarial
- Engenharia de software, IA, tendências de mercado

Público-alvo: empresários, gestores, decisores que buscam inteligência empresarial (persona ConectaDev).

## Critérios de relevância (palavras-chave / temas)

- **Incluir:** software development, engineering, AI, machine learning, SaaS, DevOps, cloud, arquitetura de software, startups tech, inovação empresarial, automação, dados, segurança da informação, tendências de mercado em tech.
- **Excluir (ou baixa prioridade):** notícias apenas de gadgets, entretenimento, criptomoedas especulativas, rumores sem fonte, conteúdo não técnico.

## Limites operacionais

| Regra | Valor | Motivo |
|-------|--------|--------|
| Máximo de posts novos por execução | 10–15 | Evitar sobrecarga e manter curadoria de qualidade. |
| Deduplicação | Por título normalizado ou URL | Evitar repetir a mesma notícia. |
| Idade máxima do item | 24–48 h | Só incluir notícias recentes (conforme data do feed). |
| Frequência do job | 1x por dia | Ex.: 6h ou 8h (horário único). |

## Fontes sugeridas (RSS / APIs)

- TechCrunch (RSS)
- Hacker News (API ou RSS)
- dev.to (RSS)
- GitHub Blog (RSS)
- Stack Overflow Blog (RSS)
- Opcional PT-BR: Olhar Digital, Canaltech, etc.

As URLs exatas e a lista final ficam no script de agregação (`scripts/blog-aggregator/`).

## Fluxo do pipeline

1. **Buscar** – Ler cada feed RSS (e/ou API).
2. **Filtrar** – Manter itens cujo título ou descrição contenham palavras-chave de relevância; descartar duplicatas (por URL ou título).
3. **Limitar** – Inserir no máximo N posts por execução (ex.: 10).
4. **Formatar** – Gerar slug, categoria padrão (ex.: "Tendências"), author = nome da fonte, sourceUrl = link original, isAggregated = true.
5. **Publicar** – Criar documentos no Sanity (`blogPost`) via API (token com permissão de escrita).

## Responsabilidade

O conteúdo agregado é **curadoria automática**. A ConectaDev não é autora das notícias; sempre exibir link para a fonte original (`sourceUrl`) e o nome da fonte (`sourceName`).
