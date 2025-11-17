import React from 'react'

async function page({params}) {
    const allParams = await params
    console.log(allParams.username)
  return (
    <div>
        <h1>[...params] catch all route segment </h1>
        <p>{allParams.username}</p>
    </div>
  )
}

export default page