"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import "react-datepicker/dist/react-datepicker.css";
import createAppointment from "../libs/createAppointment";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

export default function BookingPage({
  campgrounds,
}: {
  campgrounds: CampgroundJson
}) {
  const router = useRouter();
  const { data: session } = useSession();

  const [cid, setCid] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);

  if (!session || !session.user.token) return null;
  const submit = () => {
    if (cid && date) {
      const booking = async () => {
        await createAppointment(session.user.token, cid, date);
      };
      booking();
      alert("Successfully booked!");
      router.push("/dashboard");
    } else {
      alert("Please fill in the missing field!");
    }
  };

  const campgroundArray = campgrounds;

  return (
    <div className="text-left w-full px-12">
      <div className="block text-4xl font-bold mt-[8%]">
        Choose your campground
      </div>

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
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
            className="bg-white border-[1px] border-gray-500 rounded-lg py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500 w-full"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          className="bg-white border-[1px] border-emerald-500 px-8 py-1 mr-10 text-emerald-500 font-medium rounded-full"
          onClick={() => {
            setCid("");
            setDate(null);
          }}
        >
          Cancel
        </button>
        <button
          className="bg-emerald-500 px-10 py-1 text-white font-medium rounded-full"
          onClick={submit}
        >
          Book!
        </button>
      </div>
    </div>
  );
}
