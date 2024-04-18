import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { PaymentItem } from 'interface';

export default function TransactionCardUser({ status,transaction }: { status: string, transaction: PaymentItem }) {
    return (
        <div className="w-[100%] h-[100%] min-w-[320px] min-h-[550px] bg-white rounded-[50px] flex flex-row border border-2">

            <div className="w-[40%] rounded-l-[50px] flex justify-center items-end" style={{ backgroundImage: 'url("https://s359.kapook.com/pagebuilder/e27ea4c1-5502-45be-8a3b-d08dc7c456a4.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain' }}>
                <div className={`w-full py-[20px] rounded-bl-[50px] ${status === 'PENDING' ? 'bg-[#D9D9D9] bg-opacity-70' : status === 'COMPLETE' ? 'bg-fern bg-opacity-60' : 'bg-white'} `}>
                    <div className="">
                        {
                            status === "PENDING" ? <div className="flex flex-row justify-center items-center space-x-[20px]"><PendingIcon sx={{ fontSize: '50px', color: '#626262' }} /><div className="font-bold text-[40px] text-white drop-shadow-md">Payment Pending</div></div>
                                : status === "COMPLETE" ? <div className="flex flex-row justify-center items-center space-x-[20px]"> <CheckCircleIcon sx={{ fontSize: '50px', color: '#29FB57' }} /><div className="font-bold text-[40px] text-white drop-shadow-md">Payment Completed</div></div>
                                    : null
                        }
                    </div>
                    {/* <div className="flex flex-row justify-center items-center space-x-[20px]">
                        <CheckCircleIcon sx={{ fontSize: '50px', color: '#36FF00' }} />
                        <div className="font-bold text-4xl text-white drop-shadow-md">Payment Completed</div>
                    </div> */}
                </div>
            </div>

            <div className="w-[60%] flex justify-center items-center p-[50px]">
                <div className="w-full h-full grid grid-cols-2 justify-center items-start text-left space-y-[10px]">
                    <div className="col-span-2 text-4xl font-bold text-fern">Customer Information</div>
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="flex flex-col pr-[30px]">
                            <p className="font-semibold text-black text-xl">Campground</p>
                            <p className="font-normal text-black text-xl">{transaction.campground.name}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-black text-xl">Date</p>
                            <p className="font-normal text-black text-xl">{(new Date(transaction.rent_date)).getDate() + "/" + (new Date(transaction.rent_date)).getMonth() + "/" + (new Date(transaction.rent_date)).getFullYear()}</p>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                    <div className="col-span-2 text-4xl font-bold text-fern">Payment</div>
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="font-normal text-black text-xl">Campground booking</div>
                        <div className="font-normal text-black text-xl">${transaction.campground.price.decimal128.toString()}</div>
                    </div>
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="font-normal text-black text-xl">Taxes & Fee</div>
                        <div className="font-normal text-black text-xl">$0</div>
                    </div>
                    <hr className="col-span-2" />
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="font-bold text-black text-xl">Total</div>
                        <div className="font-bold text-black text-xl">${transaction.campground.price.toString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}