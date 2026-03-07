# Plano de Evolução do Portfólio (Mockups Vibe Dev™)

**Inspiração Principal:** Plataformas modernas de design de interface (ex: *21st.dev*, *Aceternity UI*, *Apple Design*).
**Objetivo:** Abandonar os tradicionais "cards" estáticos e apresentar os projetos (*SOAPIA* e *VIBE FOOD*) injetados diretamente nas telas de dispositivos (Tablets e Laptops) simulando uso em ambiente real com um "feel" cinematográfico.

---

## 1. O Conceito Visuo-Interativo (O "WOW" Factor)

Para atingir o padrão premium desejado, a visualização dos projetos deixará de ser apenas a "imagem solta" para se tornar uma composição em **alta fidelidade**:

1. **Moldura do Dispositivo (Device Mockup):** As imagens não serão apenas retângulos, mas estarão "embutidas" na tela de um mock-up vetorial (SVG) de um **iPad Pro** ou de um **MacBook minimalista**.
2. **Scroll Automático (Auto-Panning):** Como a interface desses sistemas costuma ser longa, a imagem inserida na tela do tablet fará um *scroll automático vertical lento* quando o usuário passar o mouse por cima (hover), varrendo o dashboard de cima a baixo.
3. **Perspectiva 3D (Opcional, mas Premium):** Ao invés de uma tela chapada, os tablets podem estar levemente rotacionados no eixo Y utilizando `framer-motion`, como uma "fila" que vai passando.
4. **Iluminação Atmosférica:** Atrás de cada tablet mockup, haverá um brilho (*glow*) neon da cor primária daquele projeto (Ex: Lilás para SOAPIA, Laranja para VIBE FOOD), conferindo profundidade.

---

## 2. Abordagem Arquitetural e Tecnológica

Para mantermos a performance e entregarmos o visual "Vibe Dev™", criaremos um ecossistema de componentes reutilizáveis utilizando apenas o TailwdinCSS e o Framer Motion.

### O Novo Componente: `TabletMockup.tsx`
Será criada uma casca flexível em CSS puro e SVGs leves:
*   **Carcaça:** Um container escuro com bordas arredondadas de raio alto (ex: `rounded-[2rem]`), bordas e bordas externas sutis simulando alumínio anodizado escuro.
*   **Tela (Inner Viewport):** Um container interno com proporções típicas de tablet (ex: Aspect Ratio de 4:3), com `overflow-hidden`.
*   **Imagem Injetada:** A imagem que chega do Sanity ficará dentro do *inner viewport* com instrução para ocupar 100% da largura (`w-full`), mas altura automática. No evento de _hover_, um *transform translateY* a faz deslocar-se suavemente pelo seu tamanho restante.

### Integração no Section `Portfolio.tsx`
O layout atual (Grid convencional) será transformado:
*   Para acomodar os dispositivos de forma grandiosa, mudaremos os cards atuais para deixá-los ocupar metades maiores da tela ou criaremos um carrossel horizontal de dispositivos que se "destacam" da tela.

---

## 3. Workflow de Execução (Próxima Etapa)

1. **Desenvolvimento do Mockup:** Criar o componente isolado `TabletMockup` (Vitreous, Dark Mode) e testá-lo com as imagens estáticas geradas.
2. **Animando o Scroll Interativo:** Implementar via framer-motion ou CSS puríssimo a animação de hover *auto-scroll* dentro da tela do dispositivo.
3. **Plugging com o Sanity CMS:** O Sanity CMS continuará servindo a URL da foto, mas o novo componente de UI a envolverá automaticamente ao chegar no Front-End.
4. **Layout Fluido:** Organizar o Grid e aplicar perspectiva, fazendo os projetos flutuarem sobre o fundo com brilhos de cor contextuais (baseados nas tags dos próprios projetos).
