import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ base: './src/content/stories', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    author: z.string(),
    publishedAt: z.coerce.date(),
    readingTime: z.number().int().positive(),
    category: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ base: './src/content/books', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    description: z.string(),
    year: z.number().int(),
    genre: z.string(),
    pages: z.number().int().positive(),
    cover: z.string(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { stories, books };