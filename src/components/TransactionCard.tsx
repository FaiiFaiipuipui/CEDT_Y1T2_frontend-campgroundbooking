import Link from "next/link";

export default function TransactionCard({
  tid,
  user,
  campground,
  date,
  status,
  submitImage
}: {
  tid: string;
  user: string;
  campground: any;
  date: Date;
  status:string;
  submitImage:String[];
}) {
  return (
    <main>
      <div className="flex flex-row text-center items-center justify-center space-x-2 space-y-3">
        <div className="w-1/5">
          <div>{user}</div>
        </div>
        <div className="w-1/5">
          <div>{campground.name}</div>
        </div>
        <div className="w-1/5">
          <div>{date.toDateString()}</div>
        </div>
         <div className="w-1/5 items-center justify-center flex">
          {
            (status === "REJECTED")? 
            <div className="flex flex-row space-x-2">
              <div className="w-5 h-5 bg-red-400 rounded-full"></div>
              <div className="text-red-400">
                {status}
              </div>
            </div>
            : (status === "PENDING")? 
            <div className="flex flex-row space-x-2">
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              <div className="text-gray-400">
                {status}
              </div>
            </div>
            : (status === "CONFIRM")? 
            <div className="flex flex-row space-x-2">
              <div className="w-5 h-5 bg-green-400 rounded-full"></div>
              <div className="text-green-400">
                {status}
              </div>
            </div>
            : null
        }
        </div>


{
  (status === "REJECTED") ? (
    <Link href={`/payment/edit?tid=${tid}`} className="w-1/5">
      <button className="justify-center bg-white border-[2px] border-purple-500 px-8 py-1 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white">
        Edit
      </button>
    </Link>
  ) : (status === "PENDING" && submitImage.length == 0)? (
    <Link href={`/payment?tid=${tid}`} className="w-1/5">
      <button className="justify-center bg-white border-[2px] border-purple-500 px-8 py-1 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white">
        Pay
      </button>
    </Link>
  ) : (status === "PENDING" && submitImage.length > 0)? (
    <Link href={`/transaction/${tid}`} className="w-1/5">
      <button className="justify-center items-center bg-white border-[2px] border-purple-500 px-8 py-1 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white">
        Detail
      </button>
    </Link>
): <div className="w-1/5"></div>
}

      </div>
    </main>
  );
}
