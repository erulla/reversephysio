import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5),
    placeholder: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { testimonials };
