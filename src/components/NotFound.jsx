import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <img src="/images/404-error.gif" alt="" />
        <h1 className='text-3xl font-bold text-indigo-900'>PAGE NOT FOUND</h1>
    </div>
  )
}
