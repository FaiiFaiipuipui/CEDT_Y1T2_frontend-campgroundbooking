"use client";
import React from "react";
import { Session } from "next-auth";
import { PaymentJson, PaymentItem } from "interface";
import TransactionCard from "./TransactionCard";

export default async function TransactionCatalog({transactionJson, session}:{transactionJson:PaymentJson, session:Session}) {

  const transactionJsonReady = await transactionJson;
  
  return (
    <main className="text-center">
      <div className="text-4xl font-bold m-10 text-left">User Transaction</div>
      <div className="rounded-b-[50px] items-center justify-center">
        <div className="flex flex-row bg-cadetblue text-xl h-20 items-center justify-center rounded-t-[50px]  font-semibold">
          <div className="w-1/6">User</div>
          <div className="w-1/6">Campground</div>
          <div className="w-1/6">Date</div>
          <div className="w-1/6">Transaction Status</div>
          <div className="w-1/6"></div>
          
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
