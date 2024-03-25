/* const fetch = require('node-fetch'); */

export default async function getCampground(id: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/campgrounds/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch campgrounds");
  }
  return await response.json();
}
