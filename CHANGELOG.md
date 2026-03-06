# CHANGELOG

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
- **Cache-Busting de Logo**: Implementação de query parameters no logo para garantir exibição imediata após substituição de arquivo.
- **Árvore de Decisão Consultiva (Progressive Profiling)**: Upgrade no Funil de Leads para 6 passos dinâmicos que se adaptam por nicho, capturando Dores Reais, Maturidade da Empresa, Urgência e Expectativa de Investimento B2B/B2C para máxima qualificação.

### Corrigido
- **Fix Crítico de Renderização**: Erro de sintaxe no componente `OperationalFlow` (tag JSX duplicada).
- **Hero Section**: Removida exportação duplicada e corrigidos tipos que causavam tela branca.
- **Consistência de Botões**: Unificados todos os botões de ação para utilizarem o componente `Button` da branch UI, garantindo visual premium.
