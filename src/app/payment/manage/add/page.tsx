"use client";

import createPayment from "@/libs/createPayment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPaymentPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [status, setStatus] = useState("");
  const [rent_date, setRent_date] = useState("");
  const [successful_payment_date, setSuccessful_payment_date] = useState("");
  const [submitted_slip_images, setSubmitted_slip_images] = useState("");
  const [successful_payment_slip_image, setSuccessful_payment_slip_image] = useState("");
  const [campground, setCampground] = useState("");
  const [user, setUser] = useState("");
  const [appointment, setAppointment] = useState("");

  if (!session || !session.user.token) return null;
  const submit = () => {
    if (
      status &&
      rent_date &&
      successful_payment_date &&
      submitted_slip_images &&
      successful_payment_slip_image &&
      campground &&
      user &&
      appointment 
    ) {
      const addPayment = async () => {
        await createPayment(
          session.user.token,
          status,
          rent_date,
          successful_payment_date,
          submitted_slip_images,
          successful_payment_slip_image,
          campground,
          user,
          appointment
        );
      };
      addPayment();
      alert("Successfully added!");
      router.push("/payment");
    } else {
      alert("Please fill in the missing field!");
    }
  };

  return (
    <main className="text-left mx-[20%] pb-5">
      <div className="text-4xl font-bold mt-[8%] ">Create a payment</div>
      <div className="w-full my-10">
        <label className="w-auto block text-gray-700" htmlFor="name">
          Status
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Type the name of campground here"
          className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        ></input>
      </div>
      <div className="w-full my-10">
        <label className="w-auto block text-gray-700" htmlFor="coor">
          Rent_date
        </label>
        <input
          type="date"
          required
          id="coor"
          name="coor"
          placeholder="Type the coordinate here"
          className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          value={rent_date}
          onChange={(e) => setRent_date(e.target.value)}
        ></input>
      </div>
      <div className="w-full my-10">
        <label className="w-auto block text-gray-700" htmlFor="picture">
          Successful_payment_date
        </label>
        <input
          type="date"
          required
          id="picture"
          name="picture"
          placeholder="Type the source of image here"
          className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          value={successful_payment_date}
          onChange={(e) => setSuccessful_payment_date(e.target.value)}
        ></input>
      </div>
      <div className="flex my-10">
        <div className="w-1/2">
          <label className="w-full block text-gray-700" htmlFor="province">
            Submitted_slip_images
          </label>
          <input
            type="text"
            required
            id="province"
            name="province"
            placeholder="Type the province here"
            className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            value={submitted_slip_images}
            onChange={(e) => setSubmitted_slip_images(e.target.value)}
          ></input>
        </div>
        <div className="w-1/2 ml-5">
          <label className="w-auto block text-gray-700" htmlFor="region">
            Successful_payment_slip_image
          </label>
          <input
            type="text"
            required
            id="region"
            name="region"
            placeholder="Type the region here"
            className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            value={successful_payment_slip_image}
            onChange={(e) => setSuccessful_payment_slip_image(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex my-10">
        <div className="w-1/2">
          <label className="w-full block text-gray-700" htmlFor="postal">
            Campground
          </label>
          <input
            type="text"
            required
            id="postal"
            name="postal"
            placeholder="Type the postal code here"
            className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            value={campground}
            onChange={(e) => setCampground(e.target.value)}
          ></input>
        </div>
        <div className="w-1/2 ml-5">
          <label className="w-auto block text-gray-700" htmlFor="tel">
            User
          </label>
          <input
            type="text"
            required
            id="tel"
            name="tel"
            placeholder="Type the phone number here"
            className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex my-10">
        <div className="w-1/2">
          <label className="w-full block text-gray-700" htmlFor="postal">
            Appointment
          </label>
          <input
            type="text"
            required
            id="postal"
            name="postal"
            placeholder="Type the postal code here"
            className="bg-white border-[2px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
            value={appointment}
            onChange={(e) => setAppointment(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-white border-[2px] border-red-500 px-8 py-1 mr-10 text-red-500 font-medium rounded-full hover:bg-red-500 hover:text-white"
          onClick={() => {
            setStatus("");
            setRent_date("");
            setSuccessful_payment_date("");
            setSubmitted_slip_images("");
            setSuccessful_payment_slip_image("");
            setCampground("");
            setUser("");
            setAppointment("");
          }}
        >
          Cancel
        </button>
        <button
          className="border-[2px] border-emerald-500 bg-white hover:bg-emerald-500 px-10 py-1 text-emerald-500 hover:text-white font-medium rounded-full"
          onClick={submit}
        >
          Add
        </button>
      </div>
    </main>
  );
}
