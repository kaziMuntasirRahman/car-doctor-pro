import { connectDB } from '@/lib/mongoDB'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  try {
    const { email } = await params
    const { bookingCollection } = await connectDB()
    const result = await bookingCollection.find({ email }).toArray()

    return NextResponse.json(result)
  } catch (error) {
    console.log(error)
  }
}

