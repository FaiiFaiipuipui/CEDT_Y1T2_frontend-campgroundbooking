"use client";

import Image from "next/image";
import getCampground from "@/app/libs/getCampground";
import Link from "next/link";
import deleteCampground from "@/app/libs/deleteCampground";

export default async function CampgroundDetailPage({
  params,
}: {
  params: { cid: string };
}) {
  const campgroundDetail = await getCampground(params.cid);

  return (
    <main>
      <div className="block w-screen h-[550px] relative">
        <Image
          src={campgroundDetail.data.picture}
          alt="Campground Picture"
          fill={true}
          className="object-cover"
        ></Image>
        <div className="relative top-[200px] z-20 text-center text-white text-4xl font-medium">
          {campgroundDetail.data.name}
        </div>
      </div>
      <div className="text-xl font-medium ml-[10%] mt-[50px] text-left text-black">
        General Information
      </div>
      <div className="ml-[10%] my-[10px] text-left text-black">
        <div className="text-md font-medium mt-[20px]">Name</div>
        <div className="text-md">{campgroundDetail.data.name}</div>
        <div className="text-md font-medium mt-[20px]">Province</div>
        <div className="text-md">{campgroundDetail.data.province}</div>
        <div className="text-md font-medium mt-[20px]">Region</div>
        <div className="text-md">{campgroundDetail.data.region}</div>
        <div className="text-md font-medium mt-[20px]">Coordinate</div>
        <div className="text-md">{campgroundDetail.data.coordinate}</div>
        <div className="text-md font-medium mt-[20px]">Postal Code</div>
        <div className="text-md">{campgroundDetail.data.postalcode}</div>
        <div className="text-md font-medium mt-[20px]">Phone Number</div>
        <div className="text-md">{campgroundDetail.data.telephone}</div>
      </div>
      {/* Authorise Admin */}
      <div className="text-center my-20">
        <button className="bg-white border-[1px] border-emerald-500 px-10 py-1 mr-10 text-emerald-500 font-medium rounded-full">
          Back
        </button>
        <Link
          href={`/campground/manage/edit?id=${params.cid}&name=${campgroundDetail.data.name}`}
        >
          <button className="bg-blue-800 px-10 py-1 mr-10 text-white font-medium rounded-full">
            Edit
          </button>
        </Link>
        <button className="bg-red-800 px-10 py-1 text-white font-medium rounded-full">
          Delete
        </button>
      </div>
    </main>
  );
}
