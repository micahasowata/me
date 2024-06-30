import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    intro: z.string(),
    tags: z.array(z.string()),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  posts,
};
