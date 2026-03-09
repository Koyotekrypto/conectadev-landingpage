# 📊 Backlog Estratégico

Este documento rastreia a evolução da ConectaDev Landingpage e planeja os próximos passos da jornada.

## 🚀 Sprint Atual: Evolução Cinematográfica & Elite Docs
- [x] Refaturoação visual "ConectaDev" (Noise, Drama Font, Pill Navbar).
- [x] Reestruturação estratégica de conteúdo (Nicho: Clínicas/Restaurantes).
- [x] Implementação da nova Arquitetura de Documentação (Diátaxis).

## 📅 Roadmap (Próximos Passos)

Detalhes e prioridade dos itens pendentes: **[PLANO_DE_EVOLUCAO.md](../PLANO_DE_EVOLUCAO.md)**.

1. **Integração de Dados Estática -> Dinâmica**
   - [ ] Implementar integração com Firestore para captura de leads.
   - [ ] Configurar monitoramento de conversão básico.
   - [ ] Usar `conectadev_interest` (sessionStorage) no formulário de contato (opcional).
2. **Blog com atualização diária automática**
   - [x] Pipeline e schema Sanity para blog; frontend consumindo Sanity + fallback; curadoria documentada.
   - [ ] Agendar job diário (cron/serverless) no ambiente de deploy.
3. **Expansão de Conteúdo**
   - [x] Nichos Clínicas e Restaurantes como cases em `/cases` (SOAPIA, VIBEFOOD); rotas `/clinicas` e `/restaurantes` redirecionam para os detalhes dos cases.
   - [x] Página FAQ (`/faq`) com perguntas melhoradas e seção Process.
4. **Micro-Interações e Conteúdo**
   - [x] Cursor customizado magnético; transições de página (Framer Motion + AnimatePresence).
   - [x] Process: cards 3D no hover; clique → #contact + sessionStorage.
   - [x] ExpertiseReveal: clique por área → #contact + sessionStorage.
   - [x] Stats qualitativos (sem números); Partners com logos oficiais (Simple Icons).

## ✅ Histórico de Conquistas
- **v1.0**: Setup inicial React + Vite + Tailwind.
- **v1.5**: Design system "Obsidian Elite" implementado.
- **v2.0**: Nova narrativa de autoridade "Tecnologia com Intenção".
- **Auditoria e Plano de Implementação**: Diagnóstico completo do site (rotas, seções, docs, mobile-first); correção de tipos do funil (FunnelOption/FunnelStepDefinition); fluxo E-commerce no funil; remoção de componentes órfãos (Navbar/Footer raiz); SITE.md e BACKLOG atualizados; font-drama no Tailwind.
- **Alinhamento de posicionamento**: Documentação e conteúdo alinhados ao posicionamento real da ConectaDev — agência de desenvolvimento de software (design cinematográfico + engenharia de software); SOAPIA e VIBEFOOD como cases de sucesso principais; clínicas e restaurantes como especialização comprovada. VISION, PRODUCT, SITE, ARCHITECTURE e contentData (Cases) atualizados.
- **Evoluções pós-Fase 5**: FAQ em rota `/faq` com conteúdo melhorado (6 perguntas) e seção Process + Contact; Process com cards 3D e clique para contato + sessionStorage; ExpertiseReveal com áreas clicáveis e sessionStorage; Stats qualitativos (pilares sem números); Marquee com novo conteúdo; Partners refeito como "Tecnologias e plataformas" com logos oficiais (Simple Icons CDN). Documentação atualizada (SITE.md, PLANO_IMPLEMENTACAO.md, ARCHITECTURE.md).
