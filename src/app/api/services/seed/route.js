import { connectDB } from '@/lib/mongoDB'
import { services } from '@/lib/services'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const { serviceCollection } = await connectDB()
  console.log('Hello, this services seed..')
  try {
    await serviceCollection.deleteMany()
    const response = await serviceCollection.insertMany(services)
    return NextResponse.json({ message: 'Seeded' })
  } catch (error) {
    console.log(error)
  }
}
