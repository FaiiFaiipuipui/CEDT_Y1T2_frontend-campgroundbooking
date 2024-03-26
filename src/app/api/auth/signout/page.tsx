"use client";

import { useState } from "react";
import Link from "next/link";
import logIn from "@/app/libs/login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const confirmLogout = () => {
        router.push("/auth/signout");
    };
    const cancelLogout = () => {
        router.push("/");
    };
    return (
        <main className="justify-start  mx-[30%] my-[5%] pb-5">
            <div className="text-4xl text-center font-bold mt-[5%] mb-[8%]">Sign Out</div>
            <div className="text-xl text-center font-bold mb-[4%]">Are you sure to sign out?</div>
            <div className="text-center">
                <button className="bg-red-500 px-10 py-1 my-5 text-white font-medium rounded-full" onClick={confirmLogout}>
                    Sure!
                </button>
                <button className="bg-emerald-500 px-10 py-1 my-5 text-white font-medium rounded-full" onClick={cancelLogout}>
                    Cancel
                </button>
            </div>
        </main>
    );
}
