import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().default(false),
    updatedAt: z.string().datetime().optional(),
  }),
});

export const collections = { sections };
