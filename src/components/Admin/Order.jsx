import React, { useState } from 'react'
import Layout from './Layout'

export default function Order() {
   
    const [orders, setOrders] = useState([
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'

        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },

        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        },
        {
            orderId: ' #t675596',
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            product: 'sumsung phone',
            amount: 52000,
            date: '5-10-2024 10:15:14 Am',
            status: 'pending'
        }
        
    ]);
    
  return (
    <div>
        <Layout>
            <div className=''>
                <h1 className='text-3xl font-semibold'>
                    Orders
                </h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead>
                            <tr className='text-white bg-black'>
                                <th className='py-4'>Order id</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                           {
                                orders.map((item, index)=>(
                                    <tr className='text-center' key={index} style={
                                        {
                                            background: (index+1)%2 === 0 ? '#f5f5f5' : 'white'
                                        }
                                    }>
                                        <td className='py-4'>{item.orderId}</td>
                                        <td className='capitalize'>{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td className='capitalize'>{item.product}</td>
                                        <td>₹{item.amount}</td>
                                        <td>{item.date}</td>
                                        <td className='capitalize'>
                                            <select name="" id="" className='p-2 border border-gray-300' >
                                                <option value="pending">pending</option>
                                                <option value="proccessing">proccessing</option>
                                                <option value="dispatched">dispatched</option>
                                                <option value="returned">returned</option>
                                            </select>
                                        </td>
                                    </tr>
                            ))
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    </div>
  )
}
