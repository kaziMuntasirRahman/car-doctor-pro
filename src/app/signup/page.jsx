'use client'

import Navbar from "@/components/shared/Navbar";
import SocialSignIn from "@/components/shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {

  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: ""
  })


  const handleSignUp = async (e) => {
    e.preventDefault()
    console.log(signUpInfo);
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpInfo)
      });
      const data = await response.json(); // ✅ wait for the data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="pt-5 max-w-6xl mx-auto min-h-screen" data-theme='car-doctor-light'>
      <Navbar authPage />
      <div className="flex justify-evenly flex-row-reverse gap-16 -mt-5">
        <Image src="/assets/images/login/login.svg" alt="login" width={460} height={500} />
        <section className="w-1/2 px-16 p-10 rounded-[10px] border border-[#d0d0d0] flex flex-col items-center h-fit ">
          <h1 className="text-center text-[#444444] text-[40px] font-semibold mb-5">Sign Up</h1>
          {/* form start */}
          <form onClick={handleSignUp} className="w-full">
            <p className="text-[#444444] text-lg font-semibold mb-5">Name</p>
            <input
              type="text"
              className="w-full h-[60px] bg-white rounded-[10px] border border-[#e8e8e8] px-4 py-3 mb-7"
              placeholder="Your name"
              onChange={(e) => setSignUpInfo({ ...signUpInfo, name: e.target.value })}
            />
            <p className="text-[#444444] text-lg font-semibold mb-5">Email</p>
            <input
              type="email"
              className="w-full h-[60px] bg-white rounded-[10px] border border-[#e8e8e8] px-4 py-3 mb-7"
              placeholder="Your email"
              onChange={(e) => setSignUpInfo({ ...signUpInfo, email: e.target.value })}
            />
            <p className="text-[#444444] text-lg font-semibold mb-5">Password</p>
            <input
              type="password"
              className="w-full h-[60px] bg-white rounded-[10px] border border-[#e8e8e8] px-4 py-3 mb-7"
              placeholder="Your password"
              onChange={(e) => setSignUpInfo({ ...signUpInfo, password: e.target.value })}
            />
            <button className="btn btn-primary w-full">Sign Up</button>
          </form>
          <p className="text-[#444444] text-lg font-medium text-center my-3">
            Or continue with
          </p>

          <SocialSignIn />

          <h6 className="text-neutral-500 text-lg text-center">Already have an account? {" "}
            <Link href='/signin' className="text-primary hover:underline font-semibold">Sign In</Link>
          </h6>
        </section>
      </div>
    </div>
  );
};

export default SignUp;