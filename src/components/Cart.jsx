import React, { useState } from 'react'
import Layout from './Layout'
import Products from './Products';

export default function Cart() {
    const [products, setProducts] = useState([
        {
            title: 'white Shirt',
            price: 3000,
            discount: 15,
            image:'/images/a4.jpg'
        },
        {
            title: 'Red Shirt',
            price: 8000,
            discount: 25,
            image:'/images/a1.jpg'
        },
        {
            title: 'white T-Shirt',
            price: 4000,
            discount: 35,
            image:'/images/a7.jpg'
        },

    ]);
  return (
    <div>
        <Layout>
            <div className='p-8 mx-auto bg-white border rounded-md shadow-lg md:w-7/12 md:my-16'>
                <h1 className='font-serif text-3xl font-bold'>
                    <i className='mr-2 ri-shopping-cart-line'></i>
                    Cart
                </h1>

                <hr className='my-6'/>


                <div className='space-y-12'>

                    {
                        products.map((item, index)=>(
                            <div key={index} className='flex items-center gap-3'>
                                <img src={item.image} alt="" className='w-[100px] shadow-md' />
                                <div>
                                    <h1 className='text-lg font-semibold capitalize'>{item.title}</h1>
                                    <div className='space-x-2'>
                                        <label className="text-lg font-semibold">
                                            ₹{item.price - (item.price*item.discount)/100}
                                        </label>
                                        <del>₹{item.price}</del>
                                        <label className="text-gray-500">
                                            {item.discount}% Discount
                                        </label>

                                    </div>

                                    
                                    <button className='px-3 py-2 mt-5 text-white rounded bg-rose-600'>
                                            <i className="mr-2 ri-delete-bin-line"></i>
                                            Remove
                                    </button>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>

                <hr className='my-6'/>

                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold'>
                        Total : ₹5700
                    </h1>
                    <button className='px-10 py-2 text-white bg-black rounded hover:bg-orange-500'>
                        <i className="mr-2 ri-shopping-bag-4-line"></i>
                        Buy Now
                     </button>
                </div>

                
            </div>
        </Layout>
    </div>
  )
}
