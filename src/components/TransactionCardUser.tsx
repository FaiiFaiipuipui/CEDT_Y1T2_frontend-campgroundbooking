import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TransactionCardUser() {
    return (
        <div className="w-[100%] h-[100%] min-w-[320px] min-h-[550px] bg-white rounded-[50px] flex flex-row border border-2">

            <div className="w-[40%] rounded-l-[50px] flex justify-center items-end" style={{ backgroundImage: 'url("https://s359.kapook.com/pagebuilder/e27ea4c1-5502-45be-8a3b-d08dc7c456a4.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', objectFit: 'contain' }}>
                <div className="w-full py-[20px] rounded-bl-[50px] bg-fern bg-opacity-60">
                    <div className="flex flex-row justify-center items-center space-x-[20px]">
                        <CheckCircleIcon sx={{fontSize: '50px', color: '#36FF00'}}/>
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
                            <p className="font-normal text-black text-[24px]">อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-black text-[24px]">Date</p>
                            <p className="font-normal text-black text-[24px]">30/01/2024</p>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                    <div className="col-span-2 text-[38px] font-bold text-fern">Payment</div>
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="font-normal text-black text-[24px]">Campground booking</div>
                        <div className="font-normal text-black text-[24px]">$150</div>
                    </div>
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="font-normal text-black text-[24px]">Taxes & Fee</div>
                        <div className="font-normal text-black text-[24px]">$0</div>
                    </div>
                    <hr className="col-span-2" />
                    <div className="col-span-2 flex flex-row justify-between items-center">
                        <div className="font-bold text-black text-[24px]">Total</div>
                        <div className="font-bold text-black text-[24px]">$150</div>
                    </div>
                </div>
            </div>
        </div>
    );
}