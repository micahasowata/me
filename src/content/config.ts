import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
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

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
