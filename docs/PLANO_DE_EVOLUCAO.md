# Plano de Evolução – Pendências

Este documento consolida **o que ainda falta executar** a partir dos planos em andamento. O histórico do que já foi feito está em [PLANO_IMPLEMENTACAO.md](PLANO_IMPLEMENTACAO.md) e em [CHANGELOG.md](../CHANGELOG.md).

---

## Já realizado (resumo)

- Fases 1 a 5 do Plano de Implementação (correções, documentação, design, blog Sanity + pipeline, Clínicas/Restaurantes, theme-color).
- Evoluções pós-Fase 5: FAQ em `/faq`, Process com 3D e clique para contato, ExpertiseReveal com áreas clicáveis, Stats qualitativos, Marquee atualizado, Partners com logos oficiais (Simple Icons), sessionStorage `conectadev_interest` gravado por ExpertiseReveal e Process. Documentação atualizada (SITE, ARCHITECTURE, BACKLOG, PRODUCT, CHANGELOG).

---

## O que falta executar (prioridade)

### Alta prioridade

1. ~~**Usar `conectadev_interest` no formulário de contato**~~ **(concluído)**  
   LeadFunnel lê `sessionStorage.getItem('conectadev_interest')` ao montar; envia `areaOfInterest` no payload do Formspree e inclui "Área de interesse" na mensagem do WhatsApp quando preenchido.

2. **Deploy do schema Sanity**  
   Rodar `cd cms && npx sanity deploy` (ou equivalente) para o tipo `blogPost` existir no projeto; gerar token com permissão de escrita; configurar no ambiente onde o site for hospedado.

3. ~~**Agendar job diário do blog**~~ **(configurado em código)**  
   Workflow [.github/workflows/blog-aggregate.yml](.github/workflows/blog-aggregate.yml) criado: execução diária às 8h UTC e disparo manual. Para ativar: adicione o secret `SANITY_API_TOKEN` em **Settings → Secrets → Actions**. Deploy do schema Sanity (item 2) deve estar feito antes da primeira execução.

### Média prioridade

4. **Firestore para captura de leads**  
   Persistir leads no Firestore além do envio atual (Formspree/WhatsApp), conforme planejado no plano original.

5. **Monitoramento de conversão básico**  
   Configurar evento ou funnel de conversão (ex.: envio do formulário, clique em CTA) em ferramenta de analytics.

6. **Core Web Vitals**  
   Medir LCP, FID, CLS (Lighthouse ou campo do PageSpeed) e aplicar ajustes de performance conforme necessário.

### Baixa prioridade

7. **Revisar CTAs por página**  
   Garantir foco em uma conversão principal por rota (Home, Blog, Cases, FAQ).

### Backlog futuro

8. **Sprint 8: Automação Deep** – Integração total com CRM e automação de marketing.  
9. **Sprint 9: Global Expansion** – Suporte multi-idioma e performance global.

---

## Próximo passo recomendado

Fazer o **item 2** (deploy do schema Sanity no projeto Sanity) e, em seguida, adicionar o secret `SANITY_API_TOKEN` no GitHub para ativar o job diário do blog (item 3 já está em código).
