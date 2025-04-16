'use client'

import { getService } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const inputStyle = "h-[60px] bg-white rounded-[10px] text-black placeholder:text-[#a2a2a2] leading-[30px] px-[25px] py-[15px] bg-white";
const clipPathStyle = {
  clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
};
// Function to format the date as YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (`0${d.getMonth() + 1}`).slice(-2); // add leading zero if needed
  const day = (`0${d.getDate()}`).slice(-2); // add leading zero if needed
  return `${year}-${month}-${day}`;
};
// Get today's date
const today = formatDate(new Date());

const CheckOut = () => {
  const { _id } = useParams()
  const user = useSession()?.data?.user;
  console.log(user);

  const [service, setService] = useState({})

  useEffect(() => {
    let data;
    const fetchService = async () => {
      if (_id) {
        data = await getService(_id);
        setService(data)
        // console.log(data);
      }
    }
    fetchService()
  }, [])

  const { service_id, title, img, price } = service;

  // TODO: change name and email from useSession
  const [bookingInfo, setBookingInfo] = useState({})

  useEffect(() => {
    if (service && user) {
      setBookingInfo({
        name: user?.name, email: user?.email, date: today, due: price, message: "", img, title, service_id
      })
    }
  }, [service, user])

  const handleCheckOut = async (e) => {
    e.preventDefault();
    console.log(bookingInfo);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingInfo)
      });
      const data = await response.json()
      if (data?.result?.insertedId) {
        alert("booking pending");
        console.log(data);
      }
      else {
        alert("error occurred");
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* banner */}
      <div className='w-full relative'>
        <div
          className='w-full h-full bg-gradient-to-r from-[#151515] to-[#151515]/5 rounded-[10px] absolute left-0 top-0 flex items-center px-[20px] md:px-[100]'>
          <h2 className="text-white text-[45px] font-bold ">Check Out</h2>
          <div
            style={clipPathStyle}
            className='bg-primaryColor h-12 w-80 px-3 flex items-center justify-center text-white text-xl font-medium absolute bottom-0 left-1/2 -translate-x-1/2 hover:underline cursor-pointer'>
            Home/Checkout
          </div>
        </div>
        <Image alt="Checkout" width={1100} height={280}
          src="/assets/images/checkout/checkout.png"
          className='w-full'
        />
      </div>
      {/* form */}
      <form
        onSubmit={handleCheckOut}
        className="my-12 p-[97px] bg-[#F3F3F3] grid grid-cols-2 gap-6 w-full">
        <input
          type="text"
          className={`${inputStyle} `}
          placeholder="First Name"
          defaultValue={user?.name}
          // defaultValue="John Doe"
          onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
        />
        <input
          type="email"
          className={`${inputStyle} `}
          defaultValue={user?.email}
          // defaultValue="john@email.com"
          placeholder="Email"
          readOnly
          onChange={(e) => setBookingInfo({ ...bookingInfo, email: e.target.value })}
        />
        <input
          type="date"
          className={`${inputStyle} `}
          placeholder="Date"
          defaultValue={today}
          onChange={(e) => setBookingInfo({ ...bookingInfo, date: e.target.value })}
        />
        <input
          type="text"
          className={`${inputStyle} `}
          value={"$" + price}
          readOnly
          onChange={(e) => setBookingInfo({ ...bookingInfo, due: e.target.value })}
        />
        <textarea
          rows='3'
          type="text"
          className={`${inputStyle} col-span-2 row-span-2`}
          placeholder="Message"
          onChange={(e) => setBookingInfo({ ...bookingInfo, message: e.target.value })}
        />
        <button className="btn btn-primary col-span-2 h-16">Submit</button>
      </form>
    </div>
  );
};

export default CheckOut;