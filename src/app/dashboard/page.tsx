import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import getUserDashboard from "../libs/getUserDashboard";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Booking(){

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserDashboard(session.user.token);
    var createdAt = new Date(profile.data.createdAt);
    return (
        <main className="text-center p-5 mx-[8%]">
            <div className="text-4xl font-bold m-10 text-left">My profile</div>
            <div className="bg-slate-100 m-5 p-5 text-left">
                <table className="table-auto border-collapse border-separate border-spacing-3">
                <div className="text-2xl">{profile.data.name}</div>
                <tbody>
                    <tr><td>Email: </td><td>{profile.data.email}</td></tr>
                    <tr><td>Telephone: </td><td>{profile.data.telephone}</td></tr>
                    <tr><td>Member since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
                </table>
            </div>
            

            <div className="text-4xl font-bold m-10 text-left">Edit my profile</div>
            <div className='m-10 text-left'>
                <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your new name and surname here"/>
            </div>
            <div className='m-10 text-left'>
                <label for="emil" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your new email address here"/>
            </div>

            <div className="text-4xl font-bold pt-10 m-10 text-left">Edit my booking</div>
            <div>
                picture
            </div>
        </main>
    );
}