import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/services/AuthProvider'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: {
    default: 'Car Doctor Pro',
    template: '%s | Car Doctor Pro'
  },
  description: 'Car Repairing Shop'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' data-theme='car-doctor-light'>
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-6xl mx-auto min-h-screen flex flex-col`}
        >
          <Navbar />
          <div className="flex-1">
          {children}
          </div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  )
}
