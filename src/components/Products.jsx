import React, { useState } from 'react';
import Layout from './Layout';

export default function Products() {
    const [products, setProdcts] = useState([
        {
          title: 'New Red Shirt',
          price: 3500,
          discount: 15,
          thumbnail: '/images/a1.jpg'
        },
        {
          title: 'New Black Shoot',
          price: 3500,
          discount: 20,
          thumbnail: '/images/a2.jpg'
        },
        {
          title: 'New Dress',
          price: 3500,
          discount: 35,
          thumbnail: '/images/a3.jpg'
        },
        {
          title: 'New White Shirt',
          price: 3500,
          discount: 10,
          thumbnail: '/images/a4.jpg'
        },
        {
          title: 'New Balck T-Shirt',
          price: 3500,
          discount: 15,
          thumbnail: '/images/a5.jpg'
        },
        {
          title: 'New Pink Shirt',
          price: 3500,
          discount: 17,
          thumbnail: '/images/a6.jpg'
        },
        {
          title: 'White T-Shirt',
          price: 3500,
          discount: 15,
          thumbnail: '/images/a7.jpg'
        },
        {
          title: 'New Black cort',
          price: 3500,
          discount: 15,
          thumbnail: '/images/a8.jpg'
        },
    
      ])
      return (
        <Layout>
         
          <div className="p-8 md:p-16">
            <h1 className='mb-2 font-serif text-3xl font-bold text-center'>All Products</h1>
            <p className='mx-auto mb-3 text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sequi.</p>
              <div className="grid gap-8 mx-auto mt-5 md:w-10/12 md:grid-cols-4">
                {
                  products.map((item,index)=>(
                    <div key={index} className='bg-white shadow-lg'>
                      <img src={item.thumbnail} alt="" />
                      <div className='p-4'>
                          <h1 className='text-lg font-semibold'>{item.title}</h1>
                          <div className='space-x-2'>
                            <label className='text-lg font-semibold'>₹{item.price-(item.price*item.discount)/100}</label>
                            <del>₹{item.price}</del>
                            <label className="text-gray-600">({item.discount}%)</label>
                          </div>
                          <button className='w-full py-2 mt-2 font-semibold text-white bg-black rounded'>Buy Now</button>

                          <button className='w-full py-2 mt-2 font-semibold text-white bg-orange-400 rounded'><i class="ri-shopping-cart-fill"></i> Add To Cart</button>
                      </div>
                    </div>
                  ))
                }
              </div>
          </div>
         
        </Layout>
      );
    }
    