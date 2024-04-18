"use client";
import React, { useState } from "react";
import { Session } from "next-auth";
import { PaymentJson, PaymentItem } from "interface";
import TransactionCard from "./TransactionCard";

export default async function TransactionCatalog({
  transactionJson,
  session,
}: {
  transactionJson: PaymentJson;
  session: Session;
}) {
  const transactionJsonReady = await transactionJson;

  //console.log(session?.user.role);
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
        {transactionJsonReady.data
          .filter(
            (transactionItem: PaymentItem) =>
              transactionItem.status === "PENDING" //test
          )
          .map((transactionItem: PaymentItem) => (
            <TransactionCard
              key={transactionItem._id}
              tid={transactionItem._id}
              user={transactionItem.user.name}
              campground={transactionItem.campground}
              date={new Date(transactionItem.rent_date)}
              status={transactionItem.status}
              submitImage={transactionItem.submitted_slip_images}
            />
          ))}
      </div>
    </main>
  );
}
