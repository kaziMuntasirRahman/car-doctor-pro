import { connectDB } from '@/lib/mongoDB'
import bcrypt from 'bcrypt' 
import { NextResponse } from 'next/server'

export const POST = async request => {
  try {
    const newUser = await request.json()
    console.log(newUser)
    const db = await connectDB()
    const { userCollection } = db
    const existingUser = await userCollection.findOne({ email: newUser.email })
    if (existingUser) {
      return NextResponse.json({ message: 'User Exists' }, { status: 409 })
    }
    newUser.password = bcrypt.hashSync(newUser.password, 14)
    const NextResponse = await userCollection.insertOne(newUser)
    return NextResponse.json({ message: 'User Created' }, { status: 200 })
  } catch (error) {
    console.log(error.message)
    return NextResponse.json({ message: 'Server Error' }, { status: 500 })
  }
}
