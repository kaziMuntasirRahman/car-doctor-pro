import { connectDB } from '@/lib/mongoDB'
import { ObjectId } from 'mongodb'

export const GET = async (request, { params }) => {
  try {
    const { email } = await params
    const { bookingCollection } = await connectDB()
    const result = await bookingCollection.find({ email }).toArray()

    return Response.json(result)
  } catch (error) {
    console.log(error)
  }
}

