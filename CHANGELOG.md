# CHANGELOG

## [2026-03-06] - Refinamento Elite & Auditoria Responsiva
### Adicionado / Modificado
- **Restauração de Impacto do Logo**: Retorno às dimensões imponentes (`h-56` no Navbar, `h-96` no Footer) com lógica de escala responsiva progressiva para evitar quebras.
- **Menu Mobile VIBE DEV™**: Implementação de menu overlay animado com Framer Motion, garantindo navegação fluida em smartphones.
- **Auditoria Mobile-First**: Ajuste de tipografia e espaçamentos para suporte total a dispositivos de 320px (iPhone SE legado).
- **Compatibilidade Legada**: Configuração de `browserslist` para garantir prefixos CSS em navegadores antigos.

## [2026-03-06] - Sprint 6: Imersão e Conteúdo Dinâmico
### Adicionado
- **Páginas Internas**: Lançamento de `BlogPost.tsx` e `CaseDetail.tsx` para leitura profunda.
- **Transições Suaves**: Integração de `AnimatePresence` para navegação fluida entre rotas.
- **Scroll Restoration**: Automação de scroll para o topo em cada mudança de página.
- **SEO Dinâmico**: Estrutura preparada para metadados por post/case.
- **CTAs Contextuais**: Botões de conversão específicos integrados ao conteúdo técnico.

## [2026-03-06] - Sprint 5: O Ecossistema de Conteúdo
### Adicionado
- **Arquitetura Multi-página**: Migração completa para `react-router-dom` com rotas para Home, Blog e Cases.
- **Página de Blog**: Sistema de listagem de artigos com design premium e micro-interações.
- **Página de Cases**: Vitrine dedicada para estudos de caso com foco em resultados B2B.
- **Navegação Persistente**: Navbar atualizada com lógica de scroll cruzado entre rotas.
- **contentData.ts**: Nova fonte de verdade para ativos de marketing e conteúdo técnico.

## [2026-03-06] - Sprint 4: Autoridade e Impacto
### Adicionado
- **SEO & Global Branding**: Implementação de metadados robustos, OpenGraph e indexação em `index.html`.
- **Efeito Magic Glow**: Cards de serviço com rastreamento de mouse e iluminação dinâmica via `radial-gradient`.
- **CustomCursor**: Novo sistema de cursor personalizado com efeitos magnéticos e animações suaves via `framer-motion`.
- **Walkthrough Sprint 4**: Documentação completa da evolução entregue.

## [2026-03-05/2026-03-06]
### Adicionado / Modificado
- **Tradução Global para o Português (PT-BR)**: Todos os componentes (Navbar, Footer, seções diversas) traduzidos e adaptados para o público brasileiro.
- **Identidade e Nomenclatura**: Substituição de "ConectaDev" avulso por assinaturas e taglines como "Desenvolvimento e inteligência EMPRESARIAL".
- **Refinamento do Logo**: Ampliação da presença visual da marca e reestruturação para um layout de navegação mais consolidado.
- **Layout Obsidian Elite (Navbar & Footer)**: Refatoração premium dos componentes de navegação com animações de entrada via Framer Motion, micro-interações de hover e estética ultra-clean (fundo dinâmico e logos com brilho neon suave).
- **Design Cinematográfico**: Implementação de scroll-reveals e parallax sutis em todas as seções principais (Hero, OperationalFlow, ServiceMatrix, ValidationLog, Authority), garantindo uma experiência visual de alto impacto.
- **Dark Mode Obsidian Elite**: Transição completa para paleta Slate 950/Zinc, purgando completamente tons azul/ciano/esmeralda em prol do preto, cinza, prata e accent laranja.
- **Design System Semântico**: Substituição de classes `navy-*` por variáveis CSS padrão do Shadcn (`background`, `muted-foreground`, etc.).
- **Integração de Componentes Premium (New Hero & Expertise)**: Adição do `ShaderAnimation` (Three.js) para fundo dinâmico e `RevealImageList` para showcase interativo de especialidades.
- **Modal de Fundadores (Elite Visual)**: Implementação de modal biográfico com design cinematográfico e informações reais baseadas no currículo de Anderson Cardoso (Engenheiro de Software UFC).
- **Refinamento de Escala do Logo**: Ajuste iterativo do tamanho do logo no Navbar (`h-56`) e Footer (`h-96`) para máxima legibilidade e impacto visual, conforme solicitação do usuário.
- **Cache-Busting de Logo**: Implementação de query parameters no logo para garantir exibição imediata após substituição de arquivo.
- **Árvore de Decisão Consultiva (Progressive Profiling)**: Upgrade no Funil de Leads para 6 passos dinâmicos que se adaptam por nicho, capturando Dores Reais, Maturidade da Empresa, Urgência e Expectativa de Investimento B2B/B2C para máxima qualificação.

### Corrigido
- **Fix Crítico de Renderização**: Erro de sintaxe no componente `OperationalFlow` (tag JSX duplicada).
- **Hero Section**: Removida exportação duplicada e corrigidos tipos que causavam tela branca.
- **Consistência de Botões**: Unificados todos os botões de ação para utilizarem o componente `Button` da branch UI, garantindo visual premium.
