import React from 'react'

async function page({params}) {
  const allParams=await params
  const {username}=await params
  console.log(allParams)
  return (
    <div>
      <h1>
        dynamice route with optional catch all route [[...slug]]
      </h1>
      <h1>hell with slig {username}</h1>
    </div>
  )
}

export default page