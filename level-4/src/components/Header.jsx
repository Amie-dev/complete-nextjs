"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
  const pathName=usePathname()
  return (
    <div className='w-full h-6 bg-amber-50 text-black flex p-6 px-17 justify-between items-center fixed top-0'>
        <div>
          <Link href={"/"}>
            <h1>Traviel</h1>

          </Link>
        </div>
        <div className='flex gap-4 items-center'>
            <Link href={"/"} className={pathName==="/"? "bg-black rounded-2xl m-2 p-1 px-2 text-center text-amber-50":""}>Home</Link>
            <Link href={"/contact"} className={pathName==="/contact"? "bg-black rounded-2xl m-2 p-1 px-2 text-center text-amber-50":""} >Contact</Link>
            <Link href={"/about"} className={pathName.startsWith("/about")? "bg-black rounded-2xl m-2 p-1 px-2 text-center text-amber-50":""}>About</Link>
        </div>
    </div>
  )
}

export default Header