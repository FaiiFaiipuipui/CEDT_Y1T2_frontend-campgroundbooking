/* const fetch = require('node-fetch'); */

export default async function getCampgrounds(limit?: number, page?: number) {
  // add timeout
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const limitParam = limit ? `?limit=${limit}` : '';
  const pageParam = page ? `&page=${page}` : '';

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/campgrounds/${limitParam}${pageParam}`,
    { next: { tags: ["campgrounds"] } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch campgrounds");
  }
  return await response.json();
}
