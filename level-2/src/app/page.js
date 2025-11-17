import React from 'react'

async function Home() {
   await new Promise((resolve)=>setTimeout(resolve,2000))
  return (
    <div className='flex justify-center items-center mt-5 text-2xl border-l-0  font-extralight'>Home</div>
  )
}

export default Home