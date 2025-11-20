'use client'
import React, { useRef } from 'react'

function index() {
    const [first, setfirst] = useState<number>()

  type buttonProps={
    data:string
  }

  const input=useRef<HTMLInputElement>(null)

  const handelsubmit(e:React.FormEvent)=>{
    e.preventDefault
  }
  return (
    <div>
        <form action="" onSubmit={handelsubmit}></form>
<input type="text" ref={input} />

    </div>
  )
}

export default index