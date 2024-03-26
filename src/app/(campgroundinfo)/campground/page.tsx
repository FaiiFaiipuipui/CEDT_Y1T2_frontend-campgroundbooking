import getCampgrounds from "@/app/libs/getCampgrounds";
import CampgroundCatalog from "@/components/CampgroundCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import Link from "next/link";

export default function Campground() {
  const campgrounds = getCampgrounds(50);
  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">Campground</div>
      {/* Admin ONLY */}
      {/* {profile.data.role == "admin" ? () */}
      <Link href="/campground/manage/add">
        <button className="absolute top-[17%] right-[12%] bg-emerald-500 px-4 py-1 text-white font-medium rounded-full">
          Add Campground
        </button>
      </Link>

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
