import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getAppointment from "@/app/libs/getAppointment";
import Link from "next/link";

export default async function AppointmentDetailPage({
  params,
}: {
  params: { aid: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const apptDetail = await getAppointment(params.aid, session.user.token);

  return (
    <main className="text-left mx-[20%] pb-5">
      <div className="text-4xl font-bold mt-[8%] ">Add new campground</div>
      <div className="ml-[10%] my-[10px] text-left text-black">
        <div className="text-md font-medium mt-[20px]">User ID</div>
        <div className="text-md">{JSON.stringify(apptDetail.data.user)}</div>
        <div className="text-md font-medium mt-[20px]">Campground</div>
        <div className="text-md">
          {JSON.stringify(apptDetail.data.campground.name)}
        </div>
        <div className="text-md font-medium mt-[20px]">Date</div>
        <div className="text-md">
          {JSON.stringify(apptDetail.data.apptDate)}
        </div>
      </div>

      <div className="text-center my-20">
        <button className="bg-white border-[1px] border-emerald-500 px-10 py-1 mr-10 text-emerald-500 font-medium rounded-full">
          Back
        </button>
        <Link href={`/booking/manage/edit?id=${params.aid}`}>
          <button className="bg-blue-800 px-10 py-1 mr-10 text-white font-medium rounded-full">
            Edit
          </button>
        </Link>
        <Link href={`/booking/manage/delete?id=${params.aid}`}>
          <button className="bg-red-800 px-10 py-1 text-white font-medium rounded-full">
            Delete
          </button>
        </Link>
      </div>
    </main>
  );
}
