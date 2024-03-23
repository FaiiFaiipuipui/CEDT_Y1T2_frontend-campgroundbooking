import Image from "next/image";
import getCampground from "@/app/libs/getCampground";

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
    </main>
  );
}
