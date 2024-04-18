"use client";
import React, { useState } from "react";
import { Session } from "next-auth";
import TransactionCard from "./TransactionCard";

export default async function TransactionCatalog({transactionJson, session, role}:{transactionJson:PaymentJson, session:Session, role:string}) {

  const transactionJsonReady = await transactionJson;
  return (
    <main className="text-center">
      {session?.user.role === "admin" ? (
        <div className="text-4xl font-bold m-10 text-left">
          User Transaction
        </div>
      ) : session?.user.role === "user" ? (
        <div className="text-4xl font-bold m-10 text-left">My Booking</div>
      ) : null}
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
        submitImage={transactionItem.submitted_slip_images}
        role={role}/>
      ))}
      </div>
    </main>
  );
}
