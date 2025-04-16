import { connectDB } from '@/lib/mongoDB'

export const GET = async () => {
  try {
    const { serviceCollection } = await connectDB()
    const response = await serviceCollection.find().toArray()
    return Response.json(response)
  } catch (error) {
    console.log(error)
  }
}
