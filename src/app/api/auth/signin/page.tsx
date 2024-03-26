"use client"

import React from "react";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";


const LoginPage = () => {
  const email = useRef("");
  const password = useRef("");
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl : "/"
    });

    if (result.error) {
      console.error("Sign-in error:", result.error);
    }
  }
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
          onChange={(e) => (email.current = e.target.value)}
        ></input>
        <label className="w-auto block text-gray-700 mb-2" htmlFor="name">
          Password
        </label>
        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="Password"
          className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mb-2 text-gray-700 focus:outline-none focus:border-emerald-500"
          onChange={(e) => (password.current = e.target.value)}
        ></input>
        
      </div>
      <div className="text-center">
        <button className="bg-emerald-500 px-10 py-1 my-5 text-white font-medium rounded-full" onClick={onSubmit}>
          Login
        </button>
      </div>
      <div className="text-center">
        Don't have any account yet? 
        <Link href={'/api/auth/register'}>
          <button className="ml-1 py-1 my-5 font-bold">
            Register here
          </button>
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;