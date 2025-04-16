import { connectDB } from "@/lib/mongoDB"
import { ObjectId } from "mongodb"

export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params
    const { bookingCollection } = await connectDB()
    const result = await bookingCollection.deleteOne({_id: new ObjectId(id)})
    return Response.json(result)
  } catch (error) {
    console.log(error)
  }
}