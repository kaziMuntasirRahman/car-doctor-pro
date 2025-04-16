import { connectDB } from '@/lib/mongoDB'
import { services } from '@/lib/services'

export const GET = async () => {
  const { serviceCollection } = await connectDB()
  console.log('Hello, this services seed..')
  try {
    await serviceCollection.deleteMany()
    const response = await serviceCollection.insertMany(services)
    return Response.json({ message: 'Seeded' })
  } catch (error) {
    console.log(error)
  }
}
