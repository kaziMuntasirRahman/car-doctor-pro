import HomePage from '../components/home/HomePage'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

export default function Home () {
  return (
    <div
      className='max-w-6xl min-h-screen flex flex-col mx-auto pt-12'
      data-theme='car-doctor-light'
    >
      <Navbar />
      <div className='flex-grow'>
        <HomePage />
      </div>
      <Footer />
    </div>
  )
}
