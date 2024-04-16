import Link from "next/link";
import { getServerSession } from "next-auth";
import getUserDashboard from "@/libs/getUserDashboard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TransactionCardUser from "@/components/TransactionCardUser";
import TransactionCardAdmin from "@/components/TransactionCardAdmin";

export default async function TransactionPage({
    params,
}: {
    params: { tid: string };
}) {

    const session = await getServerSession(authOptions);
    const profile = await getUserDashboard(session.user.token);
    console.log("Role: " + profile.data.role);

    return (
        <main className="w-[100vw] h-full flex justify-center items-center pt-[55px]">
            <div className="space-y-[70px] w-[100%] h-[100%] p-[80px]">
                <p className="font-bold text-[48px] text-left">Booking Detail</p>

                {/*Detail Card */}
                <div>
                    {!profile ? null :
                        <div className="w-full h-full">
                            {
                                profile.data.role === 'user' ?
                                    <div className="w-full space-y-[70px]">
                                        <TransactionCardUser />
                                        <div className="flex flex-row justify-evenly items-center">
                                            <Link href={`/transaction`}>
                                                <button className="bg-white border-[2px] border-emerald-500 px-10 py-1 mr-10 text-emerald-500 font-medium rounded-full hover:bg-emerald-500 hover:text-white">
                                                    Back
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    : <div className="w-full space-y-[70px]">
                                        <TransactionCardAdmin/>
                                        <div className="flex flex-row justify-evenly items-center">
                                            <Link href={`/transaction`}>
                                                <button className="bg-white border-[2px] border-emerald-500 px-10 py-1 mr-10 text-emerald-500 font-medium rounded-full hover:bg-emerald-500 hover:text-white">
                                                    Back
                                                </button>
                                            </Link>
                                            <Link href={`/transaction`}>
                                                <button className="bg-emerald-500 border-[2px] border-emerald-500 px-10 py-1 mr-10 text-white font-medium rounded-full hover:bg-white hover:text-emerald-500">
                                                    Submit
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                            }
                        </div>
                    }
                </div>


            </div>
        </main>
    )
}