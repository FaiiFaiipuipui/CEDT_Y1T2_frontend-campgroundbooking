'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserDashboard from "@/app/libs/getUserDashboard";
import { dbConnect } from "@/db/dbConnect";
import Appointment from "@/db/models/Appointment";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingCard({
  campgrounds,
  appointmentDate,
}: {
  campgrounds: CampgroundJson;
  appointmentDate: Date;
}) {
  const campgroundArray = campgrounds;

  /*  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserDashboard(session.user.token);

    const makeAppointment = async (makeAppointmentForm:FormData)=>{
    const apptDate = appointmentDate;
    const user = profile.data._id;
    const campground = makeAppointmentForm.get('campground');
    const createdAt = new Date(Date.now());

    try {
      await dbConnect();
      const appointment = await Appointment.create({
        apptDate: apptDate,
        user: profile.data._id,
        campground: campground,
        createdAt: createdAt
      });
    } catch(error) {
      console.log(error);
    }
    revalidateTag('appointments')
  }; */

  return (
    <div className="text-left w-full px-12">
      <div className="block text-4xl font-bold mt-[8%]">
        Choose your campground
      </div>
      <form method="POST" action={makeAppointment}>
        <div className="block my-10">
          <label htmlFor="campground" className="w-auto block text-gray-700">
            Select Campground
          </label>
          <select
            id="campground"
            name="campground"
            className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          >
            {campgroundArray.data.map((campgroundObj: CampgroundItem) => {
              return (
                <option value={campgroundObj._id} key={campgroundObj._id}>
                  {campgroundObj.name}
                </option>
              );
            })}
          </select>

          <div className="flex flex-row my-10 justify-between">
            <label htmlFor="DatePicker" className="w-auto block text-gray-700">
              Select Start Date
            </label>
            <DatePicker
              placeholderText="Click to select start date"
              selected={appointmentDate}
              onChange={() => {}}
              className="bg-white border-[1px] border-gray-500 rounded-lg py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500 w-full"
            ></DatePicker>
          </div>
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
            Book!
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingCard;
