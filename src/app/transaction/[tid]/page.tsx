import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function TransactionPage({
    params,
}: {
    params: { tid: string };
}) {
    return (
        <main className="w-[100vw] h-full flex justify-center items-center">
            <div className="space-y-[70px] w-[100%] h-[100%] p-[80px]">
                <p className="font-bold text-[48px] text-left">Booking Detail</p>

                {/*Detail Card */}
                <div className="w-[100%] h-[100%] min-w-[320px] min-h-[550px] bg-white rounded-[50px] flex flex-row border border-2">

                    <div className="w-[40%] rounded-l-[50px] flex justify-center items-end" style={{ backgroundImage: 'url("https://s359.kapook.com/pagebuilder/e27ea4c1-5502-45be-8a3b-d08dc7c456a4.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain' }}>
                        <div className="w-full py-[20px] rounded-bl-[50px] bg-fern bg-opacity-60">
                            <div className="flex flex-row justify-center items-center space-x-[20px]">
                                <FontAwesomeIcon icon={faCircleCheck} style={{ width: '64px', height: '64px', color: '#48B02C' }} />
                                <div className="font-bold text-[40px] text-white drop-shadow-md">Payment Completed</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[60%] flex justify-center items-center p-[50px]">
                        <div className="w-full h-full grid grid-cols-2 justify-center items-start text-left space-y-[10px]">
                            <div className="col-span-2 text-[38px] font-bold text-fern">Customer Information</div>
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="flex flex-col pr-[30px]">
                                    <p className="font-semibold text-black text-[24px]">Campground</p>
                                    <p className="font-medium text-black text-[24px]">อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-black text-[24px]">Date</p>
                                    <p className="font-medium text-black text-[24px]">30/01/2024</p>
                                </div>
                            </div>
                            <div className="col-span-2"></div>
                            <div className="col-span-2 text-[38px] font-bold text-fern">Payment</div>
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="font-medium text-black text-[24px]">Campground booking</div>
                                <div className="font-medium text-black text-[24px]">$150</div>
                            </div>
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="font-medium text-black text-[24px]">Taxes & Fee</div>
                                <div className="font-medium text-black text-[24px]">$0</div>
                            </div>
                            <hr className="col-span-2" />
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="font-bold text-black text-[24px]">Total</div>
                                <div className="font-bold text-black text-[24px]">$150</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-evenly items-center">
                    <Link href={`/transaction`}>
                        <button className="bg-white border-[2px] border-emerald-500 px-10 py-1 mr-10 text-emerald-500 font-medium rounded-full hover:bg-emerald-500 hover:text-white">
                            Back
                        </button>
                    </Link>
                    <Link href={`/`}>
                        <button className="border-[2px] border-red-800 bg-red-800 px-10 py-1 text-white font-medium rounded-full hover:bg-white hover:text-red-800">
                            Delete
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}