import Link from "next/link";

export default function AppointmentCard({
  key,
  userId,
  campgroundName,
  appointmentDate,
}: {
  key: string;
  appointmentDate: Date;
  userId: string;
  campgroundName: string;
}) {
  return (
    <main>
      <div className="flex flex-row text-left">
        <div className="w-1/5">
          <div className="text-lg font-bold">UserID</div>
          <div>{userId}</div>
        </div>
        <div className="mx-20 w-1/5">
          <div className="text-lg font-bold ">Campground</div>
          <div>{campgroundName}</div>
        </div>
        <div className="mx-20 w-1/5">
          <div className="text-lg font-bold">Appointment Date</div>
          <div>{appointmentDate.toDateString()}</div>
        </div>
        <Link href={`/appointment/${key}`} className="w-1/5">
          {" "}
          <button className="bg-white border-[1px] border-purple-500 px-8 py-1 mr-10 text-black-500 font-medium rounded-full">
            detail
          </button>
        </Link>
      </div>
    </main>
  );
}
