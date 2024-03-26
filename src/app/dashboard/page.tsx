import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import getUserDashboard from "../libs/getUserDashboard";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AppointmentCatalog from "@/components/AppointmentCatalog";
import Image from "next/image";
import getAppointment from "@/app/libs/getAppointment";

export default async function Booking(){
    
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserDashboard(session.user.token);
    var createdAt = new Date(profile.data.createdAt);
    
    const campgrounds = getAppointment(session.user._id);

    return (
        <main className="text-center p-5 mx-[8%]">
            <div className="text-4xl font-bold m-10 text-left">My profile</div>
            <div className="bg-slate-100 m-5 p-5 text-left">
                <table className="table-auto border-collapse border-separate border-spacing-3">
                <tbody>
                    <tr><td colspan="2" className="text-2xl">{profile.data.name}</td></tr>
                    <tr><td>Email: </td><td>{profile.data.email}</td></tr>
                    <tr><td>Telephone: </td><td>{profile.data.telephone}</td></tr>
                    <tr><td>Member since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
                </table>
            </div>

            <div className="text-4xl font-bold pt-10 m-10 text-left">Edit my booking</div>
            <Suspense
                fallback={
                <p>
                    Loading...
                    <LinearProgress />
                </p>
                }>
                <AppointmentCatalog appointmentJson={appointment} />
            </Suspense>
        </main>
    );
}