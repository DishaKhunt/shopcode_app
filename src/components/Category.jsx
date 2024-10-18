import React, { useState } from 'react'
import Layout from './Layout'
export default function Category() {

    const [category, setCategory] = useState([
        {
            title: "Men's Clothing"
        },
        {
            title: "women's Clothing"
        },
        {
            title: "Kid's Clothing"
        },
        {
            title: 'Accessories'
        },
        {
            title: 'Footwear'
        },
        {
            title: 'Outwear'
        },
        {
            title: 'Specialty Items'
        },
        {
            title: 'Seasonal Collections'
        }

    ])
  return (
    <div>
        <Layout>
            <div className="p-8 md:p-16">
            <h1 className='mb-2 font-serif text-3xl font-bold text-center'> Category</h1>
                <div className="grid w-10/12 gap-8 mx-auto mt-5 md:gap-16 md:grid-cols-4">
                    {
                        category.map((item,index)=>(
                            <div className='flex flex-col items-center justify-between p-8 bg-white rounded shadow-lg hover:bg-orange-600 hover:text-white' key={index}>
                                <i className='text-6xl ri-menu-search-line'></i>
                                <h1 className='text-xl font-bold text-center'>{item.title}</h1>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </Layout>
    </div>
  )
}
