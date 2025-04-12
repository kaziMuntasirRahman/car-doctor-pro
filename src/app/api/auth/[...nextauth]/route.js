import { connectDB } from '@/lib/mongoDB'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize (credentials) {
        const { email, password } = credentials
        if (!email || !password) {
          return null
        }
        const { userCollection } = await connectDB()
        const existingUser = await userCollection.findOne({ email })
        if (!existingUser) {
          return null
        }
        const passwordMatch = bcrypt.compareSync(
          password,
          existingUser.password
        )
        if (!passwordMatch) {
          return null
        }
        return existingUser
      }
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn ({ user, account }) {
      if (account.provider === 'google' || account.provider === 'github') {
        const { name, email, image } = user
        try {
          const { userCollection } = await connectDB()
          const existingUser = await userCollection.findOne({ email })
          if (!existingUser) {
            const dbResponse = await userCollection.insertOne(user)
            console.log(dbResponse);
            return user;
          } else {
            return user
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        return user
      }
    }
  },
  pages: {
    signIn: '../../../signin'
  }
})

export { handler as GET, handler as POST }
