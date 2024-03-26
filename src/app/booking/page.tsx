"use client";
import BookingCard from "@/components/BookingCard";
import getCampgrounds from "../libs/getCampgrounds";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

function BookingPage() {
  const [campgrounds, setCampgrounds] = useState(null);
  useEffect(() => {
    getCampgrounds(50).then((data) => setCampgrounds(data));
  }, []);
  
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  useEffect(() => {
    setAppointmentDate(appointmentDate)
  }, [appointmentDate]);

  if (!campgrounds) return null;

  return (
    <main className="bg-white max-w-full h-100 m-5 rounded-2xl sticky flex flex-col justify-start z-40 p-1 align-middle items-center gap-x-3 drop-shadow-2xl pb-5">
        <Suspense
          fallback={
            <p>
              Loading...
              <LinearProgress />
            </p>
          }
        >
          <BookingCard campgrounds={campgrounds} appointmentDate={appointmentDate} />
        </Suspense>
    </main>
  );
}

export default BookingPage;
