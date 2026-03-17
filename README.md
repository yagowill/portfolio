# Portfólio — Yago Martins

Portfólio pessoal e blog técnico construído com Next.js 16, Tailwind CSS e MDX.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Estilo:** Tailwind CSS
- **Blog:** MDX via `next-mdx-remote`
- **Deploy:** Vercel

## Rodando localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura do projeto

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── blog/
│   │   ├── page.tsx          # Listagem de posts
│   │   └── [slug]/page.tsx   # Post individual
│   ├── projetos/page.tsx     # Listagem de projetos
│   └── contato/page.tsx      # Página de contato
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── BlogCard.tsx
├── lib/posts.ts              # Utilitários para ler MDX
└── content/posts/            # Seus posts em MDX
```

## Adicionando um post

O posts são criados através de arquivos `.mdx` em `src/content/posts/`:

```mdx
---
title: "Título do post"
description: "Descrição curta que aparece no card."
date: "2024-12-01"
tags: ["Java", "Spring Boot"]
---

Conteúdo do post em Markdown...
```

O post aparece automaticamente na listagem, ordenado por data.

## Deploy na Vercel

1. Suba o projeto no GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. Clique em **Deploy** — sem configuração extra necessária

## Licença

MIT
