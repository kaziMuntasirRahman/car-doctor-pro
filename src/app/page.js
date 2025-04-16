export const dynamic = "force-dynamic"

import HomePage from '../components/home/HomePage'

export default function Home () {
  return (
    <div
      className='min-h-screen flex flex-col'
      data-theme='car-doctor-light'
    >
      <div className='flex-grow'>
        <HomePage />
      </div>
    </div>
  )
}
