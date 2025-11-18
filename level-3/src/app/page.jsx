"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Home() {
  const router=useRouter()
  return (
    <div>
      
      <ul className='flex justify-around items-center m-3'>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"/contact"}><li>Contact</li></Link>
      </ul>
      <button onClick={()=>router.push("/golive")} className=' bg-fuchsia-300 rounded-2xl'>
        Go To golive
      </button>
    </div>
  )
}

export default Home