# Imagens do case Luane Nascimento | Advocacia

As imagens desta pasta são exibidas em **carrossel automático** (passam sozinhas) em:

- **Página Cases** (`/cases`) – preview do card e na página do case
- **Portfolio (home)** – modal do projeto

## Como adicionar imagens

1. Coloque os arquivos aqui com **nome numérico em sequência**:
   - `1.png` (já existe – preview principal)
   - `2.png`
   - `3.png`
   - `4.png`
   - `5.png`
   - (opcionalmente mais, se a lista no código for atualizada)

2. Use formato **PNG** ou **JPG** (se usar JPG, altere a extensão no código em `src/data/contentData.ts` no case `luane-nascimento-advogados`, campo `images`).

3. O código já está preparado para **5 imagens** (`1.png` a `5.png`). Basta salvar os arquivos nesta pasta com esses nomes — eles passam automaticamente no carrossel. Se ainda não existir `2.png`, `3.png`, etc., o carrossel pode exibir slides vazios até você adicionar os arquivos.

4. Se quiser **mais de 5 telas**, peça para atualizar a lista em `src/data/contentData.ts` e em `src/components/sections/Portfolio.tsx`.

**Ordem no carrossel** = ordem numérica dos arquivos (1, 2, 3, 4, 5).
