'use client'

import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";


const Navbar = ({ authPage = false }) => {
  const session = useSession()
  const path = usePathname()
  // console.log(path)
  console.log(session);
  return (
    <nav className="mb-12 flex justify-between items-center">
      <Link href='/'>
        <Image src='/assets/logo.svg' width={100} height={100} alt="Car Doctor Logo" />
      </Link>

      {/* nav links */}
      <div className="flex gap-5 mx-auto">
        {
          navLinks.map(({ id, title, link }) =>
            <Link key={id} href={link} className={`text-center justify-start  ${link === path ? 'text-primary' : 'text-neutral-700'} hover:text-primary text-lg font-semibold`}>{title}</Link>
          )
        }
      </div>
      {/* end part */}
      {
        authPage ||
        <div className="flex items-center gap-3.5">
          {
            session?.data?.user &&
            <HiOutlineShoppingBag className="text-xl hover:text-primary cursor-pointer" />
          }
          <CiSearch className="text-xl hover:text-primary cursor-pointer" />
          {
            session?.data?.user &&
            <button className="btn btn-outline btn-primary">Appointment</button>
          }
          {
            session?.data?.user ?
              <button onClick={() => signOut()} className="btn btn-primary">Sign out</button>
              :
              <Link href='/signin' className="btn btn-outline btn-primary">Sign In</Link>
          }
        </div>
      }
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 3,
    title: 'Services',
    link: '/services'
  },
  {
    id: 6,
    title: 'My Bookings',
    link: '/my-bookings'
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog'
  },
  {
    id: 2,
    title: 'About',
    link: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact'
  },
];