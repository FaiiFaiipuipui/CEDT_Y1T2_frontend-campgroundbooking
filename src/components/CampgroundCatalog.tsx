import Card from "./Card";
import Link from "next/link";

export default async function CampgroundCatalog({
  campgroundJson,
}: {
  campgroundJson: Object;
}) {
  const campgroundJsonReady = await campgroundJson;
  return (
    <div className="flex flex-row flex-wrap place-items-around justify-around">
      {campgroundJsonReady.data.map((campgroundItem: Object) => (
        <Link
          href={`/campground/${campgroundItem._id}`}
          key={campgroundItem._id}
          className="w-1/4 m-10"
        >
          <Card
            campgroundName={campgroundItem.name}
            imgSrc={campgroundItem.picture}
            campgroundProvince={campgroundItem.province}
          />
        </Link>
      ))}
    </div>
  );
}
