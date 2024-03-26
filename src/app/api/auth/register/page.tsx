"use client"

import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const RegisterPage = () => {
  const nameRef = useRef("");
  const telephoneRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const roleRef = useRef("");

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      name: nameRef.current,
      telephone: telephoneRef.current,
      email: emailRef.current,
      password: passwordRef.current,
      role: roleRef.current,
      redirect: true, // Redirect to homepage after successful registration
      callbackUrl: "/", // Homepage URL
    });

    if (result.error) {
      console.error("Sign-in error:", result.error);
    }
  };

  return (
    <main className="justify-start  mx-[30%] my-[5%] pb-5">
      <div className="text-4xl text-left font-bold mb-[8%] ">Register</div>
      <label className="w-auto block text-gray-700 mb-2" htmlFor="name">
          Name
        </label>
      <input
        type="text"
        required
        id="name"
        name="name"
        placeholder="Name"
        className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mb-4 text-gray-700 focus:outline-none focus:border-emerald-500"
        onChange={(e) => (nameRef.current = e.target.value)}
      />
      <label className="w-auto block text-gray-700 mb-2" htmlFor="name">
          Telephone
        </label>
      <input
        type="tel"
        required
        id="telephone"
        name="telephone"
        placeholder="Telephone"
        className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mb-4 text-gray-700 focus:outline-none focus:border-emerald-500"
        onChange={(e) => (telephoneRef.current = e.target.value)}
      />
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
        onChange={(e) => (emailRef.current = e.target.value)}
      />
      <label className="w-auto block text-gray-700 mb-2" htmlFor="name">
          Password
        </label>
      <input
        type="password"
        required
        id="password"
        name="password"
        placeholder="Password"
        className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mb-4 text-gray-700 focus:outline-none focus:border-emerald-500"
        onChange={(e) => (passwordRef.current = e.target.value)}
      />
      <label htmlFor="role">Role:</label>
      <select
        id="role"
        name="role"
        onChange={(e) => (roleRef.current = e.target.value)}
        className="bg-white border-[1px] border-gray-500 rounded-lg w-full py-2 px-4 mt-2 text-gray-700 focus:outline-none focus:border-emerald-500"
      >
        <option disabled selected>-- Please select --</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <div className="text-center">
        <button className="bg-emerald-500 px-10 py-1 my-5 text-white font-medium rounded-full" onClick={handleSubmit}>
          Register
        </button>
      </div>
      <div className="text-center">
        Already have an account? 
        <Link href={'/api/auth/signin'}>
          <button className="ml-1 py-1 my-5 font-bold">
            Login here
          </button>
        </Link>
      </div>
    </main>
  );
};

export default RegisterPage;
