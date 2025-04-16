import { connectDB } from '@/lib/mongoDB'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const { serviceCollection } = await connectDB()
    const response = await serviceCollection.find().toArray()
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
  }
}
