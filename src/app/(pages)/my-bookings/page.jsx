'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const clipPathStyle = {
  clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
};

const CartDetails = () => {
  const [bookings, setBookings] = useState([])
  const session = useSession()

  useEffect(() => {
    const fetchBookings = async () => {
      if (session?.data?.user?.email) {
        const email = session.data.user.email;
        const response = await fetch(`http://localhost:3000/api/my-bookings/${email}`)
        const data = await response.json()
        console.log(data);
        setBookings(data)
      }
    }

    fetchBookings()
  }, [session?.data?.user?.email])

  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const proceed = confirm('Do you really want to delete?')
      if (!proceed) return;

      const res = await fetch(`http://localhost:3000/api/my-bookings/delete/${_id}`, { method: "DELETE" })
      const data = await res.json()
      console.log(data);
      if (data.deletedCount > 0) {
        const updatedBooking = bookings.filter(booking => booking._id !== _id)
        setBookings(updatedBooking)
        alert("Booking deletion successful.");
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
          className='w-full h-full bg-gradient-to-r from-[#151515] to-[#151515]/5 rounded-[10px] absolute left-0 top-0 flex items-center px-[100px]'>
          <h2 className="text-white text-[45px] font-bold ">Cart Data</h2>
          <div
            style={clipPathStyle}
            className='bg-primaryColor h-12 w-80 px-3 flex items-center justify-center text-white text-xl font-medium absolute bottom-0 left-1/2 -translate-x-1/2 hover:underline cursor-pointer'>
            Home/Cart
          </div>
        </div>
        <Image width={600} height={100} alt="Car Doctor Card"
          src="/assets/images/checkout/checkout.png"
          className='w-full'
        />
      </div>
      {/* booking info table */}
      <div className="container mx-auto mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">#</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                {/* Serial Number */}
                <td className="py-2 px-4 text-center">{index + 1}</td>

                {/* Image */}
                <td className="py-2 px-4 flex justify-center items-center">
                  <Image width={100} height={100} src={booking.img} alt={booking.title} className="w-16 h-16 object-cover" />
                </td>

                {/* Title, Color, Size */}
                <td className="py-2 px-4 text-center">{booking.title}</td>

                {/* Price */}
                <td className="py-2 px-4 text-center">${booking.due}</td>

                {/* Date */}
                <td className="py-2 px-4 text-center">{booking.date}</td>

                {/* Status Button */}
                <td className="py-2 px-4 text-center btn-disabled">
                  <button className="btn btn-primary">Approved</button>
                </td>

                {/* Delete Button */}
                <td className="py-2 px-4 text-center">
                  <button className="btn btn-circle bg-red-300"
                    onClick={() => handleDelete(booking._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default CartDetails;