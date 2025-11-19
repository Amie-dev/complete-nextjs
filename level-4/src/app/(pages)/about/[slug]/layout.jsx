import React from 'react'

function layout({children,info}) {
  return (
    <div className='flex justify-between items-center'>
        <div>{children}</div>
        <div>{info}</div>
    </div>
  )
}

export default layout