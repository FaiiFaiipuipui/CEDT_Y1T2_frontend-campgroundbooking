import Card from "./Card";
import Link from "next/link";

export default async function CampgroundCatalog({
  campgroundJson,
}: {
  campgroundJson: Object;
}) {
  const campgroundJsonReady = await campgroundJson;
  return (
    <div className="flex flex-row flex-wrap place-content-around m-20 p-10">
      {campgroundJsonReady.data.map((campgroundItem: Object) => (
        <Link
          href={`/campground/${campgroundItem._id}`}
          key={campgroundItem._id}
          className="w-1/4"
        >
          <Card
            campgroundName={campgroundItem.name}
            imgSrc={campgroundItem.picture}
          />
        </Link>
      ))}
    </div>
  );
}
