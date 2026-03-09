# 🎨 Design System: Cinematic Obsidian

A estética da ConectaDev é definida pelo equilíbrio entre a escuridão profunda (Dark mode) e o brilho tecnológico (Neon Glow).

## 🌑 Paleta de Cores (Tokens)
- **Background**: `bg-background-dark` / `#0e1111` (Slate 950). Obsidian.
- **Primary**: `#CEF02E` (Lima) — definido em `tailwind.config.js`. CTAs, destaques, glow.
- **Secondary**: variáveis HSL do tema (cards, bordas).
- **Surface**: `glass-panel` (bordas 1px, opacidade, blur).

## ✒️ Tipografia
- **Display**: `font-display` → Inter (Bold/Black). Clareza e força técnica.
- **Drama**: `font-drama` → Playfair Display (serif). Use com `italic` para palavras-chave de impacto.

## ✨ Efeitos Especiais
- **Noise Overlay**: Aplicado via SVG em `absoulte inset-0`. Cria profundidade orgânica.
- **Pill UI**: Elementos de navegação e pílulas de status sempre com `rounded-full`.
- **Card Radius**: `rounded-[2rem]` para um visual amigável e moderno.

## 📏 Grid
- Container máximo: `1920px`.
- Padding lateral padrão: `px-8` (Desktop) / `px-4` (Mobile).
