import getCampgrounds from "@/app/libs/getCampgrounds";
import CampgroundCatalog from "@/components/CampgroundCatalog";

export default async function Hospital() {
  const campgrounds = await getCampgrounds();
  return (
    <main>
      <h1 className="font-xl font-bold m-10">Campground</h1>
      <CampgroundCatalog campgroundJson={campgrounds} />
    </main>
  );
}
