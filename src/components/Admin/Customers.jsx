import React,{useState} from 'react'
import Layout from './Layout'

export default function Customers() {

    const [customer, setCustomer] = useState([
        {
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            date: '5-10-2024 10:15:14 Am'
        },
        {
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            date: '5-10-2024 10:15:14 Am'
        },
        {
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            date: '5-10-2024 10:15:14 Am'
        },
        {
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            date: '5-10-2024 10:15:14 Am'
        },
        {
            customerName: 'Disha Khunt',
            email: 'disha@gmial.com',
            phone: '+91 991355478',
            date: '5-10-2024 10:15:14 Am'
        },
    ]);

  return (
    <div>
        <Layout>
           
            <div className=''>
                <h1 className='text-3xl font-semibold'>
                    Customers
                </h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead>
                            <tr className='text-white bg-black'>
                               
                                <th className='py-4'>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                           {
                                customer.map((item, index)=>(
                                    <tr className='text-center' key={index} style={
                                        {
                                            background: (index+1)%2 === 0 ? '#f5f5f5' : 'white'
                                        }
                                    }>
                                        <td className='py-4 capitalize'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <img src="/images/avt.jpg" alt="" className='w-10 h-10 rounded-full shadow-lg'/>
                                                <div className="flex flex-col justify-center text-left">
                                                    <span className='font-semibold'>
                                                        {item.customerName}
                                                    </span>
                                                    <small className='text-gray-500'>
                                                        {item.date}
                                                    </small>
                                                </div>
                                               
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.date}</td>
                                       
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
