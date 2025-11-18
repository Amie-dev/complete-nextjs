import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
        <Image
        src={"vercel.svg"}
        alt='vercel'
        width={200}
        height={200}
        
        />

        <Image
        src={"next.svg"}
        alt='vercel'
        width={200}
        height={200}
        
        />

        <Image
        src={"https://unsplash.com/photos/two-smiling-women-in-a-park-vBUGdI7JAvc"}
        alt='vercel'
        width={200}
        height={200}
        
        />

        

        
    </div>
  )
}

export default page