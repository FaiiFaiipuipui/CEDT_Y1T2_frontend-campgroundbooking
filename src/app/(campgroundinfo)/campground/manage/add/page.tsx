import { dbConnect } from "@/db/dbConnect";
import Campground from "@/db/models/Campground";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddCampgroundPage() {
  const addCampground = async (addCampgroundForm: FormData) => {
    "use server";
    const name = addCampgroundForm.get("name");
    const coordinate = addCampgroundForm.get("coor");
    const province = addCampgroundForm.get("province");
    const region = addCampgroundForm.get("region");
    const postalcode = addCampgroundForm.get("postal");
    const tel = addCampgroundForm.get("tel");

    try {
      await dbConnect();
      const campground = await Campground.create({
        name: name,
        coordinate: coordinate,
        province: province,
        postalcode: postalcode,
        telephone: tel,
        region: region,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("campgrounds");
    redirect("/campground");
  };
  return (
    <main className="text-left mx-[20%]">
      {/* Admin ONLY */}
      {/* {profile.data.role == "admin" ? () */}
      <form action={addCampground}>
        <div className="text-4xl font-bold mt-[8%] ">Add new campground</div>
        <div className="w-full my-10">
          <label className="w-auto block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Type the name of campground here"
            className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          ></input>
        </div>
        <div className="w-full my-10">
          <label className="w-auto block text-gray-700" htmlFor="coor">
            Coordinate
          </label>
          <input
            type="text"
            required
            id="coor"
            name="coor"
            placeholder="Type the coordinate here"
            className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          ></input>
        </div>
        <div className="flex my-10">
          <div className="w-1/2">
            <label className="w-full block text-gray-700" htmlFor="province">
              Province
            </label>
            <input
              type="text"
              required
              id="province"
              name="province"
              placeholder="Type the province here"
              className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            ></input>
          </div>
          <div className="w-1/2 ml-5">
            <label className="w-auto block text-gray-700" htmlFor="region">
              Region
            </label>
            <input
              type="text"
              required
              id="region"
              name="region"
              placeholder="Type the region here"
              className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            ></input>
          </div>
        </div>
        <div className="flex my-10">
          <div className="w-1/2">
            <label className="w-full block text-gray-700" htmlFor="postal">
              Postal Code
            </label>
            <input
              type="text"
              required
              id="postal"
              name="postal"
              placeholder="Type the postal code here"
              className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            ></input>
          </div>
          <div className="w-1/2 ml-5">
            <label className="w-auto block text-gray-700" htmlFor="tel">
              Phone Number
            </label>
            <input
              type="text"
              required
              id="tel"
              name="tel"
              placeholder="Type the phone number here"
              className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            ></input>
          </div>
        </div>
        <div className="w-full my-10">
          <label className="w-auto block text-gray-700" htmlFor="coor">
            Picture
          </label>
          <input
            type="text"
            required
            id="coor"
            name="coor"
            placeholder="Type the coordinate here"
            className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          ></input>
        </div>
        <div className="text-center">
          <button
            type="reset"
            className="bg-white border-[1px] border-emerald-500 px-8 py-1 mr-10 text-emerald-500 font-medium rounded-full"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-emerald-500 px-10 py-1 text-white font-medium rounded-full"
          >
            Add
          </button>
        </div>
      </form>
    </main>
  );
}
