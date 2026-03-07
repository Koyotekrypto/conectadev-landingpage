# Fluxos de Usuário (UX Flows) - Vibefood

Este documento detalha as jornadas críticas do usuário dentro do sistema Vibefood, utilizando diagramas de fluxo para ilustrar a interação entre o usuário, a interface e o sistema.

## 1. Mapeamento de Jornadas Críticas

-   **A. Jornada do Garçom (Acesso via PIN):** Autenticação rápida em terminais compartilhados.
-   **B. Jornada do Garçom (Lançamento de Pedido):** O fluxo principal de atendimento no salão.
-   **C. Jornada da Cozinha (KDS):** O ciclo de vida de um pedido na cozinha.
-   **D. Jornada do Cliente (Autoatendimento):** Pedidos feitos diretamente pelo cliente via QR Code.

---

### A. Jornada do Garçom (Acesso via PIN)

-   **Contexto:** Terminal coletivo ou celular da equipe no salão.
-   **Objetivo:** Autenticar e estar pronto para atender em menos de 5 segundos.
-   **Heurística de UX:** "Aceleração de Uso".

```mermaid
graph TD
    A[Abre a URL do terminal] --> B[Tela de Login de Garçom];
    B --> C{Seleciona o próprio nome na lista};
    C --> D[Interface para inserir o PIN];
    D --> E{Digita o PIN de 4 dígitos};
    E --> F[Sistema valida o PIN];
    F -- Válido --> G[Acesso liberado: Exibe a tela de Mesas/Comandas];
    F -- Inválido --> H[Mensagem de erro: "PIN inválido"];
    H --> D;
```

---

### B. Jornada do Garçom (Lançamento de Pedido)

-   **Contexto:** Atendendo um cliente em uma mesa.
-   **Objetivo:** Adicionar itens a uma comanda e enviá-los à cozinha com o mínimo de toques.

```mermaid
sequenceDiagram
    participant Garçom
    participant Interface (Terminal)
    participant Sistema (Firestore)

    Garçom->>Interface (Terminal): Toca na Mesa 12 (Status: "Livre")
    Interface (Terminal)->>Sistema (Firestore): Cria/Abre comanda para Mesa 12
    Sistema (Firestore)-->>Interface (Terminal): Confirma comanda aberta
    Interface (Terminal)-->>Garçom: Exibe tela da comanda vazia

    Garçom->>Interface (Terminal): Clica em "Adicionar Item"
    Interface (Terminal)-->>Garçom: Exibe o cardápio com busca
    Garçom->>Interface (Terminal): Busca "X-Burger" e seleciona
    Garçom->>Interface (Terminal): Adiciona observação: "Sem picles"
    Interface (Terminal)-->>Garçom: Item aparece na lista da comanda (Status: "Pendente")

    Garçom->>Interface (Terminal): Clica em "Enviar para Cozinha"
    Interface (Terminal)->>Sistema (Firestore): Atualiza o documento da comanda com o novo item e status
    Sistema (Firestore)-->>Interface (Terminal): Confirma a atualização
    Interface (Terminal)-->>Garçom: Feedback visual (Ex: "Pedido enviado!")
```

---

### C. Jornada da Cozinha (KDS - Kitchen Display System)

-   **Contexto:** Ambiente de alta pressão na cozinha, utilizando um tablet ou tela.
-   **Objetivo:** Visualizar e gerenciar o fluxo de preparação dos pratos de forma clara.

```mermaid
graph TD
    subgraph KDS
        A(A Fazer)
        B(Em Preparo)
        C(Pronto)
    end

    subgraph Salão
        D(Garçom)
    end

    E[Pedido é enviado pelo garçom] --> |Firestore onSnapshot| A;
    A -- "Cozinheiro toca no card" --> B;
    B -- "Cozinheiro finaliza o prato e toca/arrasta" --> C;
    C --> |Notificação no terminal| D;

    style A fill:#FFDDC1,stroke:#333,stroke-width:2px
    style B fill:#FFFFB3,stroke:#333,stroke-width:2px
    style C fill:#D4EDDA,stroke:#333,stroke-width:2px
```
- **Fluxo:**
  1.  **Notificação:** Um novo pedido aparece na coluna "A Fazer" com um alerta sonoro.
  2.  **Preparação:** O cozinheiro toca no card para movê-lo para "Em Preparo". A cor do card muda.
  3.  **Conclusão:** Ao finalizar, o cozinheiro move o card para "Pronto".
  4.  **Retirada:** O sistema notifica o garçom que o prato está pronto para ser retirado.

---

### D. Jornada do Cliente (Autoatendimento)

-   **Contexto:** Cliente sentado à mesa com seu próprio smartphone.
-   **Objetivo:** Fazer um pedido sem a necessidade de chamar o garçom.

```mermaid
sequenceDiagram
    participant Cliente
    participant Smartphone
    participant QR Code
    participant Sistema (Firestore)
    participant KDS

    Cliente->>Smartphone: Escaneia o QR Code na mesa
    Smartphone->>QR Code: Lê a URL (contém ID da mesa/restaurante)
    QR Code-->>Smartphone: Retorna URL
    Smartphone->>Sistema (Firestore): Acessa URL e carrega o cardápio público
    Sistema (Firestore)-->>Smartphone: Exibe o cardápio

    Cliente->>Smartphone: Seleciona itens e adiciona ao carrinho
    Cliente->>Smartphone: Clica em "Fazer Pedido"
    Smartphone->>Sistema (Firestore): Envia os itens do pedido vinculados à mesa
    Sistema (Firestore)-->>KDS: Novo pedido aparece na coluna "A Fazer"
    Sistema (Firestore)-->>Smartphone: Confirmação: "Seu pedido foi enviado!"
```

## 2. Padrões de Interface (UI Design)

| Elemento | Padrão Vibefood | Motivação |
| :--- | :--- | :--- |
| **Cores** | Slate-900 / Primary (Neon) | Contraste focado em ambientes escuros (Salão). |
| **Tipografia** | Inter / Outfit | Legibilidade rápida em tablets de baixa resolução. |
| **Toasts** | Temporários (2s) | Não obstruir o grid de pedidos. |
| **Botões** | Área de toque min. 48px | Uso com luvas ou mãos úmidas (Cozinha). |

## 3. Heurísticas de Usabilidade
1.  **Prevenção de Erros:** Confirmação obrigatória para ações destrutivas (ex: cancelar pedido).
2.  **Memória:** O sistema sugere itens baseados nos pedidos anteriores do cliente.
3.  **Status do Sistema:** Indicador de conexão (Online/Offline) sempre visível.