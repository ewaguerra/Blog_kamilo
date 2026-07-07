import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    kind: z.enum(['artigo', 'curso']).default('artigo'),
    courseUrl: z.string().url().optional(),
    highlights: z.array(z.string()).optional(),
    modules: z
      .array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        }),
      )
      .optional(),
    relatedCourseSlug: z.string().optional(),
    courseInfo: z
      .object({
        turma: z.string(),
        valor: z.number(),
        valorOriginal: z.number().optional(),
        vagas: z.number().optional(),
        formato: z.string(),
        cargaHoraria: z.string(),
        inicio: z.string(),
        parcelas: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
