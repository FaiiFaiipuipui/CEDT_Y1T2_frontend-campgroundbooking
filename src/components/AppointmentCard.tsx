import Link from "next/link";

export default function AppointmentCard({
  aid,
  userId,
  campground,
  appointmentDate,
}: {
  aid: string;
  userId: string;
  campground: any;
  appointmentDate: Date;
}) {
  return (
    <main>
      <div className="flex flex-row text-left">
        <div className="w-1/5">
          <div className="text-lg font-bold">User ID</div>
          <div>{userId}</div>
        </div>
        <div className="mx-20 w-1/5">
          <div className="text-lg font-bold ">Campground</div>
          <div>{campground.name}</div>
        </div>
        <div className="mx-20 w-1/5">
          <div className="text-lg font-bold">Appointment Date</div>
          <div>{appointmentDate.toDateString()}</div>
        </div>

        <Link href={`/booking/${aid}`} className="w-1/5">
          <button className="bg-white border-[1px] border-purple-500 px-8 py-1 mr-10 text-black-500 font-medium rounded-full">
            detail
          </button>
        </Link>
      </div>
    </main>
  );
}
