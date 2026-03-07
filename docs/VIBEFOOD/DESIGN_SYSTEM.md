
# Vibe UI Kit - Design System

O Vibe UI Kit é um sistema de design minimalista, dark-mode first, focado em alta densidade de informação e clareza visual para ambientes operacionais (restaurantes).

## 1. Tokens Semânticos (Theming)

Utilizamos o TailwindCSS configurado com tokens semânticos no `index.html`. Nunca utilize cores hexadecimais diretamente nos componentes.

| Token | Classe Tailwind | Valor (Ref) | Uso Correto |
| :--- | :--- | :--- | :--- |
| **Background** | `bg-background` | `#0c0c0d` | Fundo da página (body). |
| **Surface** | `bg-surface` | `#1f2937` | Cartões, Modais, Sidebars. |
| **Surface Hover** | `hover:bg-surface-hover` | `#374151` | Estado hover de itens de lista ou cartões. |
| **Primary** | `text-primary` / `bg-primary` | `#f97316` | Ações principais (Salvar, Novo Pedido). |
| **Success** | `text-green-400` | -- | Valores monetários positivos, status "Pronto". |
| **Danger** | `text-red-400` | -- | Ações destrutivas, erros, status "Cancelado". |
| **Border** | `border-gray-700` | -- | Divisores sutis em superfícies escuras. |

## 2. Anatomia dos Componentes

### A. Botões
Todos os botões devem ter feedback visual de clique e estado desabilitado.
*   **Primário:** Sólido, cor Primary. Sombra suave `shadow-lg shadow-primary/20`.
*   **Secundário (Ghost):** Fundo transparente ou Surface, borda sutil.
*   **Icon Only:** Sempre deve possuir `aria-label`.

### B. Inputs de Formulário
Projetados para toque em telas touch (iPad/Tablet).
*   **Altura:** Mínimo 44px (Touch target).
*   **Fonte:** 16px no mobile (evita zoom do iOS).
*   **Foco:** Anel de foco Primary `focus:ring-primary`.

### C. Modais
*   **Overlay:** `bg-black/70` com `backdrop-blur-sm` para foco contextual.
*   **Animação:** `animate-fade-in` para entrada suave.
*   **Fechamento:** Sempre permitir fechar clicando fora ou no 'X'.

## 3. Padrões de Feedback Visual

### Skeleton Loading
Nunca use spinners de tela cheia para carregamentos de conteúdo. Use o componente `<SkeletonLoader />` imitando o layout final.
*   **Texto:** Barras cinzas pulsantes.
*   **Imagens:** Retângulos cinzas pulsantes.

### Empty States
Quando uma lista (Comandas, Produtos) estiver vazia:
1.  Não mostre uma tabela vazia.
2.  Mostre um container centralizado com:
    *   Ícone desbotado (text-gray-600).
    *   Título "Nada por aqui".
    *   Botão de ação "Criar Novo" (se aplicável).

## 4. Acessibilidade (A11y)
*   **Contraste:** Texto primário (`text-gray-100`) sobre `bg-surface` garante taxa > 4.5:1.
*   **Navegação por Teclado:** Todos os elementos interativos devem ser focáveis (`tabindex`).
*   **Leitores de Tela:** Botões de ícone (ex: Lixeira) devem ter `aria-label="Excluir item"`.
