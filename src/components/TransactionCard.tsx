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
      <div className="flex flex-row text-left m-3">
        <div className="w-1/6">
          <div>{user}</div>
        </div>
        <div className="w-1/6">
          <div>{campground.name}</div>
        </div>
        <div className="w-1/6">
          <div>{date.toDateString()}</div>
        </div>
         <div className="w-1/6">
          <div>{status}</div>
        </div>


        {
  (status === "REJECTED") ? (
    <Link href={`/payment/edit?id=${tid}`} className="w-1/5">
      <button className="bg-white border-[2px] border-purple-500 px-8 py-1 mr-10 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white">
        Edit
      </button>
    </Link>
  ) : (status === "PENDING" && submitImage.length == 0)? (
    <Link href={`/payment?id=${tid}`} className="w-1/5">
      <button className="bg-white border-[2px] border-purple-500 px-8 py-1 mr-10 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white">
        Pay
      </button>
    </Link>
  ) : (status === "PENDING" && submitImage.length > 0)? (
    <Link href={`/transaction/${tid}`} className="w-1/5">
      <button className="bg-white border-[2px] border-purple-500 px-8 py-1 mr-10 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white">
        Detail
      </button>
    </Link>
): null
}

      </div>
    </main>
  );
}
