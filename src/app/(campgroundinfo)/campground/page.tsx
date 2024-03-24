import getCampgrounds from "@/app/libs/getCampgrounds";
import CampgroundCatalog from "@/components/CampgroundCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Hospital() {
  const campgrounds = getCampgrounds();
  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">Campground</div>
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <CampgroundCatalog campgroundJson={campgrounds} />
      </Suspense>
    </main>
  );
}
