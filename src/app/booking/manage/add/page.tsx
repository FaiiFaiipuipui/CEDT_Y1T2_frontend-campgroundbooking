"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import createAppointment from "@/app/libs/createAppointment";

export default function BookingPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const urlParams = useSearchParams();
  const id = urlParams.get("id") as string;
  const cname = urlParams.get("name");

  const [date, setDate] = useState("");

  if (!session || !session.user.token) return null;
  const submit = () => {
    if (date) {
      const booking = async () => {
        await createAppointment(session.user.token, id, date);
      };
      booking();
      alert("Successfully booked!");
      router.push("/dashboard");
    } else {
      alert("Please fill in the missing field!");
    }
  };
  return (
    <div className="text-left w-full px-12">
      <div className="text-4xl font-bold mt-[20%] ">
        Booking campground : {cname}
      </div>
      <div className="w-full my-10">
        <label className="w-auto block text-gray-700" htmlFor="date">
          Date
        </label>
        <input
          type="text"
          required
          id="date"
          name="date"
          placeholder="Type the date here"
          className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="text-center">
        <button
          className="bg-white border-[1px] border-emerald-500 px-8 py-1 mr-10 text-emerald-500 font-medium rounded-full"
          onClick={() => {
            setDate("");
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