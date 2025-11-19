import Image from 'next/image'
import React from 'react'

async function page({params}) {
  const {slug}=await params
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <h1 className='font-bold text-3xl'>This is {slug} </h1>
      <p>Add Imaage</p>
      <Image
      src={slug==="newyork"?"newyork" :""}
      />
      
    </div>
  )
}

export default page