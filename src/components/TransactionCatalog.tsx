"use client";
import { PaymentItem, PaymentJson } from "interface";
import { Session } from "next-auth";
import TransactionCard from "./TransactionCard";

export default async function TransactionCatalog({transactionJson, session}:{transactionJson:PaymentJson, session:Session}) {

  const transactionJsonReady = await transactionJson;
  return (
    <main className="text-center">
      
      <div className="rounded-b-[50px] items-center justify-center">
        <div className="flex flex-row bg-cadetblue text-xl h-20 items-center rounded-t-[50px] font-semibold">
          <div className="w-1/5">User</div>
          <div className="w-1/5">Campground</div>
          <div className="w-1/5">Date</div>
          <div className="w-1/5">Transaction Status</div>
          <div className="w-1/5"></div>
          
        </div>
         {transactionJsonReady.data.map((transactionItem:PaymentItem) => (
        <TransactionCard 
        key={transactionItem._id}
        tid={transactionItem._id}
        user={transactionItem.user.name}
        campground={transactionItem.campground}
        date={new Date(transactionItem.rent_date)}
        status={transactionItem.status}
        submitImage={transactionItem.submitted_slip_images}/>
      ))}
      </div>
    </main>
  );
}
