import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160).optional(),
    draft: z.boolean().default(false),
    updatedAt: z.string().datetime().optional(),
    ogImage: z.string().optional(),
    layout: z.enum(['default', 'landing']).default('default').optional(),
  }),
});

export const collections = { pages };
