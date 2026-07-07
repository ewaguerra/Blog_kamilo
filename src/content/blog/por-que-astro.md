---
title: 'Por que escolhi Astro para este blog'
description: 'Astro combina performance, simplicidade e uma excelente experiência para sites focados em conteúdo.'
pubDate: 2026-07-01
tags: ['astro', 'web', 'performance']
---

Quando decidi criar um blog pessoal, tinha três requisitos claros: **rápido**, **simples de manter** e **bonito por padrão**.

## O problema com SPAs para blogs

Frameworks como React são excelentes para aplicações interativas, mas um blog é essencialmente conteúdo estático. Enviar dezenas de kilobytes de JavaScript só para renderizar Markdown não faz sentido.

## Por que Astro se encaixa

Astro adota a abordagem **"Zero JS por padrão"**. Cada página é gerada estaticamente no build, resultando em:

- Tempo de carregamento mínimo
- SEO nativo
- Deploy trivial na Vercel

```bash
npm run build
# → HTML estático pronto para produção
```

## Content Collections

Posts em Markdown ficam versionados no Git, com schema tipado:

```ts
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});
```

Isso garante que nenhum post seja publicado sem os campos obrigatórios.

## Conclusão

Para um blog pessoal em PT-BR, Astro é difícil de superar. Foco no conteúdo, performance de sobra e deploy em um clique.
