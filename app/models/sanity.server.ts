import * as dotenv from "dotenv";
dotenv.config();
import PicoSanity from "picosanity";
import { z } from "zod";
import { PostSchema, Post, SinglePost } from "~/lib/post-validator";

export type SanityClient = typeof clientToUse;

export const ConfigSchema = z.object({
  dataset: z.string(),
  projectId: z.string(),
  token: z.string(),
  apiVersion: z.string(),
});

const config = ConfigSchema.parse({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
});

export const previewClient = PicoSanity({ ...config, useCdn: false });

export const sanityClient = new PicoSanity(config);

export const getClient = (usePreview = false) =>
  usePreview ? previewClient : sanityClient;

const clientToUse = getClient();

const removeDrafts = `!(_id in path('drafts.**'))`;

const postFields = `
    _id,
    title,
    mainImage,
    'date': publishedAt,
    excerpt,
    'slug': slug.current,
    "categories": categories[]->,
    'author': author->{name, 'picture': image.asset->url},
    'body': body,
    'readingTime': readingTime,
    featuredArticle,
  `;

export const getAllPosts = (client: SanityClient) => async () => {
  const allPostsQuery = `*[_type == "post" && ${removeDrafts}] | order(publishedAt desc){
    ${postFields}
  }`;
  return await fetchRecords(client, allPostsQuery);
};

export const getPostBySlug =
  (client: SanityClient) => async (slug: string) => {
    // Need to add in filtering by using the slug.
    const allPosts = await getAllPosts(client)();
    return PostSchema.parse(
      allPosts.filter((post: Post) => post.slug === slug)
    );
  };

export const getFeaturedArticles = (client: SanityClient) => async () => {
  const featuredArticleSlugQuery = `*[_type == "featuredArticle" && ${removeDrafts}]{featuredArticle[]->}`;
  const data = await fetchRecords(client, featuredArticleSlugQuery);
  // write out Schema to parse the featured article
  return data;
};

export const getAllLinks = (client: SanityClient) => async () => {
  const linksFields = `_id, _type, description, host, 'slug': slug.current, 'tags': tags[]->{name}, title, url`;
  const allLinksQuery = `*[_type == "link" && ${removeDrafts}] | order(_createdAt desc){${linksFields}}`;
  return await fetchRecords(client, allLinksQuery);
};

export const getLinkBySlug =
  (client: SanityClient) => async (slug: string) => {
    const allLinks = await getAllLinks(client)();
    return allLinks.filter((link: any) => link.slug === slug);
  };

export const getLinkByHost =
  (client: SanityClient) => async (host: string) => {
    const allLinks = await getAllLinks(client)();
    return allLinks.filter((link: any) => link.host === host);
  };

export const getAllTags = (client: SanityClient) => async () => {
  const tagsQuery = `*[_type == "tag" && !(_id in path('drafts.**'))] | order(_createdAt desc){ name }`;
  return await fetchRecords(client, tagsQuery);
};

async function fetchRecords(client: SanityClient, query: string) {
  const records = await client.fetch(query);
  return records;
}

export default (client = getClient()) => ({
  getAllPosts: getAllPosts(client),
  getPostBySlug: getPostBySlug(client),
  getAllLinks: getAllLinks(client),
  getLinkBySlug: getLinkBySlug(client),
  getLinkByHost: getLinkByHost(client),
  getAllTags: getAllTags(client),
  getFeaturedArticles: getFeaturedArticles(client),
});
