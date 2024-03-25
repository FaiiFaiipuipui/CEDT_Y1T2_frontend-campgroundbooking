"use client";

import getCampgrounds from "@/app/libs/getCampgrounds";
import CampgroundCatalog from "@/components/CampgroundCatalog";
import { Suspense, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Hospital() {
  const router = useRouter();
  const [campgrounds, setCampgrounds] = useState(null);
  useEffect(() => {
    getCampgrounds(50).then(data => setCampgrounds(data));
  }, []);

  if (!campgrounds) return null;


  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">Campground</div>
      {/* Admin ONLY */}
      {/* {profile.data.role == "admin" ? () */}
      <button
        className="absolute top-[17%] right-[12%] bg-emerald-500 px-4 py-1 text-white font-medium rounded-full"
        onClick={(e) => {
          router.push("/campground/manage/add");
        }}
      >
        Add Campground
      </button>
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
