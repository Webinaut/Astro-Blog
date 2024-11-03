import { getStore } from "@netlify/blobs";

export async function uploadEndpoint() {
  // Load the Netlify Blobs store called `UserUpload`
  const userUploadStore = getStore({
    name: "UserUpload",
    consistency: "strong",
  });
  // Get the blob from the store. Replace `<key>` with the unique key used when
  // uploading.
  const userUploadBlob = await userUploadStore.get("mart-1", {
    type: "stream",
  });
  // Make sure you throw a 404 if the blob is not found.
  if (!userUploadBlob) {
    return new Response("Upload not found", { status: 404 });
  }
  // Return the blob
  return new Response(userUploadBlob);
}
