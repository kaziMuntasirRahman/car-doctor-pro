'use client'

import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import SocialSignIn from "@/components/shared/SocialSignIn";


const SignIn = () => {
  const router = useRouter()
  const [signInInfo, setSignInfo] = useState({
    email: "",
    password: ""
  })

  const handleSignIn = async (e) => {
    e.preventDefault()
    console.log(signInInfo);
    const { email, password } = signInInfo;
    try {
      const response = await signIn('credentials', {
        email, password, redirect: false
      })
      console.log(response);
      if (response.status === 200) {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="pt-5 max-w-6xl mx-auto min-h-screen" data-theme='car-doctor-light'>
      <Navbar authPage />
      <div className="flex justify-evenly gap-16 -mt-5">
        <Image src="/assets/images/login/login.svg" alt="login" width={460} height={500} />
        <section className="w-1/2 px-[75px] py-10 rounded-[10px] border border-[#d0d0d0] flex flex-col items-center gap-[30px] h-fit">
          <h1 className="text-center text-[#444444] text-[40px] font-semibold mb-5">Sign In</h1>
          {/* form start */}
          <form onSubmit={handleSignIn} className="w-full">
            <p className="text-[#444444] text-lg font-semibold mb-5">Email</p>
            <input
              type="email"
              className="w-full h-[60px] bg-white rounded-[10px] border border-[#e8e8e8] px-[25px] py-[15px] mb-[35px]"
              placeholder="Your email"
              onChange={(e) => setSignInfo({ ...signInInfo, email: e.target.value })}
            />
            <p className="text-[#444444] text-lg font-semibold mb-5">Password</p>
            <input
              type="password"
              className="w-full h-[60px] bg-white rounded-[10px] border border-[#e8e8e8] px-[25px] py-[15px] mb-[35px]"
              placeholder="Your password"
              onChange={(e) => setSignInfo({ ...signInInfo, password: e.target.value })}
            />
            <button className="btn btn-primary w-full">Sign In</button>
          </form>
          <p className="text-[#444444] text-lg font-medium text-center">
            Or continue with
          </p>
          <SocialSignIn />
          <h6 className="text-neutral-500 text-lg text-center">Don't have an account? {" "}
            <Link href='/signup' className="text-primary hover:underline font-semibold">Sign Up Now</Link>
          </h6>
        </section>
      </div>
    </div>
  );
};

export default SignIn;