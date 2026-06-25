# WaltBoy Business Website

Website institucional da WaltBoy Business, criado com Next.js, TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

O build gera a pasta `out/`, pronta para publicacao estatica.

## Cloudflare Pages

Configuracao recomendada:

- Framework preset: `Next.js (Static HTML Export)` ou `None`
- Build command: `pnpm build`
- Build output directory: `out`
- Node.js version: `22`

Se usares Google Analytics, cria a variavel:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## GitHub

Antes de enviar para o GitHub:

```bash
git status
git add .
git commit -m "Prepare WaltBoy Business website for Cloudflare Pages"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Depois, liga o repositorio no Cloudflare Pages e usa as configuracoes acima.
