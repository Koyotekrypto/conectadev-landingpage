# TestSprite – Setup e uso neste projeto

## Testes locais (Vitest)

Enquanto o TestSprite MCP não estiver disponível, você pode rodar a suíte de testes local:

```bash
npm test          # execução única
npm run test:watch  # modo watch (re-executa ao salvar)
npm run test:ui   # interface visual (Vitest UI)
```

Testes atuais: smoke do `App` (navbar, links) e da página `Home`. Configuração em `vite.config.ts` (seção `test`) e setup em `src/test/setup.ts`.

---

## Status do MCP

O servidor MCP **TestSprite** está configurado mas em estado de erro. Para usar o TestSprite no Cursor é preciso corrigir a instalação.

## 1. Corrigir o TestSprite MCP no Cursor

1. **Node.js ≥ 22**  
   No terminal: `node --version`. Se for menor que 22, atualize em [nodejs.org](https://nodejs.org/).

2. **API Key**  
   - Crie conta em [testsprite.com](https://www.testsprite.com/auth/cognito/sign-up).  
   - No dashboard: **Settings → API Keys → New API Key** e copie a chave.

3. **Configuração MCP no Cursor**  
   - **Cursor → Settings → Tools & Integration → Add custom MCP**.  
   - Adicione o servidor TestSprite com sua API key:

   ```json
   {
     "mcpServers": {
       "TestSprite": {
         "command": "npx",
         "args": ["@testsprite/testsprite-mcp@latest"],
         "env": {
           "API_KEY": "sua-api-key-aqui"
         }
       }
     }
   }
   ```

4. **Sandbox do Cursor**  
   Para o TestSprite conseguir rodar os testes corretamente:  
   **Cursor → Settings → Chat → Auto-Run → Auto-Run Mode**  
   Altere para **"Ask Every time"** ou **"Run Everything"** (evite deixar só em sandbox).

5. **Reiniciar o Cursor**  
   Feche e abra de novo para o MCP carregar. Confira se o ícone do TestSprite fica com indicador verde e as ferramentas aparecem.

## 2. Rodar os testes com TestSprite

1. **Subir a aplicação**  
   Este projeto é um frontend Vite (porta **3000** no `vite.config.ts`):

   ```bash
   npm run dev
   ```

2. **No chat do Cursor**  
   Diga algo como:

   ```text
   Help me test this project with TestSprite.
   ```

   Ou, em inglês:

   ```text
   Can you test this project with TestSprite?
   ```

3. **Configuração no browser**  
   O bootstrap do TestSprite abre uma página no navegador. Configure:
   - **Tipo**: Frontend  
   - **URL da aplicação**: `http://localhost:3000`  
   - **Escopo**: Codebase (testar tudo) ou Diff (só alterações recentes)  
   - Se houver login: credenciais de teste  
   - PRD: pode enviar um rascunho; o TestSprite gera uma versão normalizada

4. **Resultados**  
   Após a execução, no projeto aparecem:
   - `testsprite_tests/` com plano de testes, casos (ex.: `TC001_*.py`) e resultados  
   - `TestSprite_MCP_Test_Report.md` e `.html` com o relatório

## 3. Dados deste projeto (ConectaDev landing)

- **Stack**: React, TypeScript, Vite, Tailwind, React Router.  
- **Porta dev**: 3000.  
- **Tipo**: frontend (landing page).  
- Documentação de produto/requisitos em `docs/` (ex.: `docs/PRODUCT.md`, `docs/01-product/`) pode ser usada como base para PRD no TestSprite.

## Referências

- [TestSprite – Installation](https://docs.testsprite.com/mcp/getting-started/installation)  
- [TestSprite – MCP Tools](https://docs.testsprite.com/mcp/core/tools.md)  
- [First MCP Test](https://docs.testsprite.com/mcp/getting-started/first-test)
