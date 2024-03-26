"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import updateAppointment from "@/app/libs/updateAppointment";

export default function EditAppointmentPage({
  params,
}: {
  params: { aid: string };
}) {
  const router = useRouter();
  const { data: session } = useSession();

  const urlParams = useSearchParams();
  const id = urlParams.get("id") as string;
  const cname = urlParams.get("name");

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  if (!session || !session.user.token) return null;
  const submit = () => {
    if (
      name &&
      date
    ) {
      const editAppointment = async () => {
        await updateAppointment(
          id,
          session.user.token,
          name,
          date
        );
      };
      editAppointment();
      alert("Successfully booked!");
      router.push("/appointment");
    } else {
      alert("Please fill in the missing field!");
    }
  };

  return (
    <main className="text-left mx-[20%] pb-5">
      <div className="text-4xl font-bold mt-[8%] ">
        Edit Appointment : {cname}
      </div>
      <div className="w-full my-10">
        <label className="w-auto block text-gray-700" htmlFor="name">
          Campground
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Type the name of campground here"
          className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="w-full my-10">
        <label className="w-auto block text-gray-700" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          required
          id="date"
          name="date"
          placeholder="Select the date here"
          className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="text-center">
        <button
          className="bg-white border-[1px] border-red-500 px-8 py-1 mr-10 text-red-500 font-medium rounded-full"
          onClick={() => {
            setName("");
            setDate("");
          }}
        >
          Cancel
        </button>
        <button
          className="bg-blue-800 px-10 py-1 text-white font-medium rounded-full"
          onClick={submit}
        >
          Edit
        </button>
      </div>
    </main>
  );
}
