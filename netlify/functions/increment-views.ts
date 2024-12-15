import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
export const prerender = false;
export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { slug } = await req.json();

  if (!slug) {
    return new Response("Slug is required", { status: 400 });
  }

  const store = getStore({
    name: "post-views",
    siteID: process.env.NETLIFY_SITE_ID,
    token: process.env.NETLIFY_BLOB_TOKEN,
  });

  // Get current views
  let views = 0;
  try {
    const data = await store.get(`${slug}.txt`);
    if (data) {
      views = parseInt(await data, 10);
    }
  } catch (error) {
    console.error("Error reading views:", error);
  }

  // Increment views
  views++;
  // Store new count
  await store.set(`${slug}.txt`, views.toString());
  // await store.get(`${slug}.txt`);

  return new Response(JSON.stringify({ views }), {
    headers: { "Content-Type": "application/json" },
  });
};
