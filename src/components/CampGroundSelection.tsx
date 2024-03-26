import getCampgrounds from "@/app/libs/getCampgrounds";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

export const getPollute = (async () => {
  // Fetch data from external API
  const campgrounds: CampgroundJson = await getCampgrounds(50);
  // Pass data to the page via props
  return campgrounds
})

function CampGroundSelection() {
  const [campgrounds, setCampgrounds] = useState<CampgroundJson | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCampgrounds = async () => {
      const data = await getPollute();
      setCampgrounds(data);
      setIsLoading(false);
    };

    fetchCampgrounds();
  }, []);

  if (isLoading) {
    return(
      <select
        id="campground"
        name="campground"
        className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
        >
          <option value="" disabled selected hidden>Loading...</option>
      </select>
        )
  }

  return (
      <select
        id="campground"
        name="campground"
        className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
      >
        {campgrounds && campgrounds.data.map((campgroundObj: CampgroundItem) => {
          return (
            <option value={campgroundObj._id} key={campgroundObj._id}>
              {campgroundObj.name}
            </option>
          );
        })}
      </select>
  );
}

export default CampGroundSelection;
