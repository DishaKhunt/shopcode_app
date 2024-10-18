import React from 'react'

export default function Admin() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <img src="/images/admin.svg" className='w-96 h-96' alt="" />
        <div>
            <h1 className='mb-3 text-4xl font-semibold'>Admin Console!</h1>
    
            <form action="" className='flex flex-col gap-4'>
                <input 
                    type="text"
                    className='border p-4 bg-white rounded-md w-[450px] hover:outline-none'
                    placeholder='Enter the secret code'
                    required
                 />
                 <button className='px-8 py-3 font-semibold text-white bg-indigo-400 rounded-lg w-fit'>Access Now</button>
            </form>
        </div>
        
    </div>
  )
}
