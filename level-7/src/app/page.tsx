// "use client" //for client 
import React from 'react'

async function page() {

  //csr

  // const res=async () => {
  //   const response=await fetch("/api/user"
  // )

  // const data=await response.json()
  // }

  //ssr
  // const response=await fetch("http://localhost:3000/api/user",
  //   {cache:"no-store"}
  // )

  // const data=await response.json()

  //ssg

  // const response=await fetch("http://localhost:3000/api/user",
  //   {cache:"force-cache"}
  // )

  // const data=await response.json()

  //isr

  const response=await fetch("http://localhost:3000/api/user",
    {next:{
      revalidate:10 // every 10 second data are called
    }}
  )

  const data=await response.json()


   return (
    <div>
      <p>
        {data}
      </p>
    </div>
  )
}

export default page