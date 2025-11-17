import React from 'react'

async function page({params}) {
    const {username}=await params
  return (
    <div>this is post page for user is {username} </div>
  )
}

export default page