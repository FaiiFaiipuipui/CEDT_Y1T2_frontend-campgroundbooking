import getCampgrounds from "@/app/libs/getCampgrounds";
import CampgroundCatalog from "@/components/CampgroundCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Campground() {
  const campgrounds = getCampgrounds(50);
  // const session = await getServerSession(authOptions);
  // const profile = await getUserProfile(session.user.token);
  if (!campgrounds) return null;
  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">Campground</div>

      {/* {profile.data.role == "admin" ? () : null} */}
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
