"use client";

import { useState } from "react";
import Link from "next/link";
import logIn from "@/app/libs/login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email && password) {
      const signin = async () => {
        await logIn(email, password);
      };
      signin();
      alert("Successfully login!");
      router.push("/");
    } else {
      alert("Please fill in the missing field!");
    }
  };
  return (
    <main className="justify-start  mx-[30%] my-[5%] pb-5">
      <div className="text-4xl text-left font-bold mb-[8%] ">Login</div>
      <div className="text-left">
        <label className="w-auto block text-gray-700 mb-2" htmlFor="name">
          Email
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="Email"
          className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mb-4 text-gray-700 focus:outline-none focus:border-emerald-500"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="w-auto block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="Password"
          className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mb-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="text-center">
        <button
          className="bg-emerald-500 px-10 py-1 my-5 text-white font-medium rounded-full"
          onClick={submit}
        >
          Login
        </button>
      </div>
      <div className="text-center">
        Don't have any account yet?
        <Link href={"/api/auth/register"}>
          <button className="ml-1 py-1 my-5 font-bold">Register here</button>
        </Link>
      </div>
    </main>
  );
}
