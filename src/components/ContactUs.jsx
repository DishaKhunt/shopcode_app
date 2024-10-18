import React from 'react'
import Layout from './Layout'

export default function ContactUs() {
  return (
    <div>
        <Layout>
            <div>
                <header className='mx-auto shadow-lg md:w-7/12 md:my-16'>
                    <img src="/images/contact.jpg" alt="" />
                    <div className="p-8">
                        <form action="" className='mt-8 space-y-6'>
                            <div className='flex flex-col '>
                            <label className="mb-1 text-lg font-semibold">Full Name</label>
                            <input 
                                type="text"
                                placeholder='Disha Khunt'
                                className='p-3 border border-gray-300 rounded outline-none'
                                required
                            />
                            </div>

                            <div className='flex flex-col '>
                            <label className="mb-1 text-lg font-semibold">Email id</label>
                            <input 
                                type="email"
                                placeholder='example@gmail.com'
                                className='p-3 border border-gray-300 rounded outline-none'
                                required
                            />
                            </div>


                            <div className='flex flex-col '>
                            <label className="mb-1 text-lg font-semibold">Message</label>
                            
                                <textarea 
                                    name="message" 
                                    className='p-3 border border-gray-300 rounded outline-none'
                                    placeholder='Message'
                                    required
                                    rows={3}
                                    id="">

                                </textarea>
                            </div>

                            <button className='px-12 py-3 font-semibold text-white bg-black rounded hover:shadow-lg hover:bg-orange-500'>Get Quote</button>
                        </form>

                    </div>
                </header>
            </div>
        </Layout>
    </div>
  )
}
