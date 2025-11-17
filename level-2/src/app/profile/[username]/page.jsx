import React from 'react'

async function page({params}) {
    const paramsall=await params
    const {username}=await params
    console.log(paramsall)
  return (
    
    <div>
        
        <h1>{username}</h1>
        this dynamice page</div>
  )
}

export default page