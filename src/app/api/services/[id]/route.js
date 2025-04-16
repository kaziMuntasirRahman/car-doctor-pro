import { connectDB } from '@/lib/mongoDB'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  try {
    const { serviceCollection } = await connectDB()
    const { id } = await params
    const service = await serviceCollection.findOne({ _id: new ObjectId(id) })
    return NextResponse.json(service)
  } catch (error) {
    console.log(error)
  }
}
