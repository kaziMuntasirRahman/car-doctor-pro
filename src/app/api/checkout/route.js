import { connectDB } from '@/lib/mongoDB'
import { NextResponse } from 'next/server';

export const POST = async request => {
  const bookingInfo = await request.json()
  console.log("POST /api/checkout api is being called...");
  console.log(bookingInfo);
  try {
    const { bookingCollection } = await connectDB()
    const result = await bookingCollection.insertOne(bookingInfo)
    return NextResponse.json({ message: 'Service Booked Successfully.', result })
  } catch (error) {
    console.log(error)
  }
}
