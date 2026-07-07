---
title: 'Markdown no repositório: o fluxo ideal'
description: 'Como escrever, revisar e publicar posts sem depender de um CMS externo.'
pubDate: 2026-06-10
tags: ['markdown', 'git', 'workflow']
---

Manter posts em Markdown dentro do repositório Git é uma das decisões mais práticas para um blog pessoal.

## Vantagens

1. **Versionamento** — cada alteração fica registrada no histórico do Git
2. **Offline** — escreva no VS Code, Obsidian ou qualquer editor
3. **Portabilidade** — migre de plataforma sem exportar nada
4. **Zero custo** — sem assinatura de CMS

## Fluxo de publicação

```text
1. Criar arquivo em src/content/blog/meu-post.md
2. Preencher frontmatter (title, description, pubDate, tags)
3. Escrever o conteúdo em Markdown
4. git push → Vercel faz deploy automático
```

## Frontmatter mínimo

```yaml
---
title: 'Título do post'
description: 'Resumo para SEO e cards'
pubDate: 2026-07-06
tags: ['tag1', 'tag2']
draft: false
---
```

Posts com `draft: true` não aparecem no site — útil para rascunhos.

## Dica final

Escreva primeiro, formate depois. O Markdown remove a fricção entre ideia e publicação. É o fluxo que mais me mantém consistente.
