import { getStore } from "@netlify/blobs";

const store = getStore("post-views");

export async function incrementViews(slug: string): Promise<number> {
  const currentViews = await getViews(slug);
  const newViews = currentViews + 1;
  await store.set(slug, JSON.stringify({ views: newViews }));
  return newViews;
}

/**
 * Retrieve the number of views for a given slug.
 * @param slug - The slug of the post to retrieve the view count for.
 * @returns The number of views, or 0 if the slug is not found.
 */
export async function getViews(slug: string): Promise<number> {
  try {
    const data = await store.get(slug);
    if (!data) return 0;
    const views = (await store.get(data)) || "0";
    return parseInt(views.toString());
    // const parsed = JSON.parse(await data.text());
    // return parsed.views || 0;
  } catch {
    return 0;
  }
}
