export default async function getCampgrounds() {
  // add timeout
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch("https://cbs-team-kae-leaw-backendapi.vercel.app/api/v1/campgrounds/");
  if (!response.ok) {
    throw new Error("Failed to fetch campgrounds");
  }
  return await response.json();
}
