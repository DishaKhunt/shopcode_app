import React,{useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function Layout({children}) {
    const [size, setSize] = useState(280);
    const [mobileSize, setMobileSize] = useState(0);
    const [accountMenu, setAccountMenu] = useState(false);
    const location  = useLocation();

    const menus = [
        {
            label: 'Dashboard',
            icon:  <i className="mr-3 ri-layout-grid-fill"></i>,
            to: '/admin/dashboard'
        },
        {
            label: 'Customers',
            icon:  <i className="mr-3 ri-user-line"></i>,
            to: '/admin/customers'
        },
        {
            label: 'Products',
            icon:  <i className="mr-3 ri-shopping-cart-line"></i>,
            to: '/admin/products'
        },
        {
            label: 'Orders',
            icon:  <i className="mr-3 ri-shape-line"></i>,
            to: '/admin/orders'
        },
        {
            label: 'Payments',
            icon:  <i className="mr-3 ri-money-rupee-circle-line"></i>,
            to: '/admin/payments'
        },
        {
            label: 'Settings',
            icon:  <i className="mr-3 ri-settings-4-line"></i>,
            to: '/admin/settings'
        }
    ]
  return (
    <>
        {/* Desktop */}
        <div className='hidden md:block'>
            <aside 
                    className='fixed top-0 left-0 h-screen overflow-hidden bg-indigo-300'
                    style={{
                        width:size,
                        transition: '0.3s'
                    }}
                >
                    <div className='flex flex-col'>
                        {
                            menus.map((item,index)=>(
                                <Link 
                                    key={index} 
                                    to={item.to} 
                                    className='px-4 py-3 text-[17.5px] hover:bg-indigo-50'
                                    style={{
                                        background: (location.pathname === item.link)? 'bg-indigo-50' : 'transparnt'
                                    }}>
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }
                        <button 
                                className='px-4 py-3 text-left hover:bg-indigo-50'
                            >
                                <i className="mr-3 ri-logout-circle-r-line"></i>
                                Logout
                        </button>
                    </div>
                

            </aside>
            <section 
                className='h-full bg-gray-50'
                style={{
                    marginLeft: size,
                    transition: '0.3s'
                }}
            >
                <nav className='flex items-center justify-between px-8 py-4 bg-white shadow'>
                        <div className='flex items-center gap-4'>
                            <button 
                                className='w-8 h-8 bg-gray-50 hover:bg-indigo-400 hover:text-white'
                                onClick={()=>setSize(size === 280 ? 0 : 280)}
                            >
                                <i className="text-xl ri-menu-2-line"></i>
                            </button>
                        
                            <h1 className='font-serif font-bold text-md'>Shopcode</h1>
                        </div>

                        <div>
                            <button className='relative'>
                                <img 
                                    src="/images/avt.jpg" className='w-10 h-10 border rounded-full shadow' 
                                    onClick={()=>setAccountMenu(!accountMenu)} 
                                />

                                {
                                    accountMenu && 
                                    <div className='absolute top-12 right-0 bg-indigo-200 shadow-lg p-6 w-[200px]'>
                                        
                                        <div>
                                            <h1 className='font-semibold'>Disha Khunt</h1>
                                            <p className='text-gray-500'>example@gmail.com</p>
                                            <div className="h-px my-4 bg-gray-200"/>
                
                                            <button>
                                                <i      class="ri-logout-circle-r-line mr-2"></i>
                                                    Log Out
                                            </button>
                                        </div>
                                    
                                    </div>
                                }
                            </button>
                        </div>
                    
                </nav>

                <div className='p-6'>
                    {children}
                </div>
            </section>
        </div>

        {/* mobile */}
        <div className='block md:hidden'>
            <aside 
                    className='fixed top-0 left-0 z-50 h-screen overflow-hidden bg-indigo-300'
                    style={{
                        width:mobileSize,
                        transition: '0.3s'
                    }}
                >
                    <div className='flex flex-col'>
                        <button
                            className='mx-4 mt-4 text-right'
                            onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}
                        >
                            <i className="ri-close-large-line hover:text-white"></i>
                        </button>
                        {
                            menus.map((item,index)=>(
                                <Link 
                                    key={index} 
                                    to={item.to} 
                                    className='px-4 py-3 text-[17.5px] hover:bg-indigo-50'
                                    style={{
                                        background: (location.pathname === item.link)? 'bg-indigo-50' : 'transparnt'
                                    }}>
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }

                        <button 
                            className='px-4 py-3 text-left hover:bg-indigo-50'
                        >
                            <i className="mr-3 ri-logout-circle-r-line"></i>
                                Logout
                        </button>
                    </div>
                

            </aside>
            <section 
                className='h-full bg-gray-50'
                style={{
                  
                }}
            >
                <nav className='flex items-center justify-between px-8 py-4 bg-white shadow'>
                        <div className='flex items-center gap-4'>
                            <button 
                                className='w-8 h-8 bg-gray-50 hover:bg-indigo-400 hover:text-white'
                                onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}
                            >
                                <i className="text-xl ri-menu-2-line"></i>
                            </button>
                        
                            <h1 className='font-serif font-bold text-md'>Shopcode</h1>
                        </div>

                        <div>
                            <button className='relative'>
                                <img 
                                    src="/images/avt.jpg" className='w-10 h-10 border rounded-full shadow' 
                                    onClick={()=>setAccountMenu(!accountMenu)} 
                                />

                                {
                                    accountMenu && 
                                    <div className='absolute top-12 right-0 bg-indigo-200 shadow-lg p-6 w-[200px]'>
                                        
                                        <div>
                                            <h1 className='font-semibold'>Disha Khunt</h1>
                                            <p className='text-gray-500'>example@gmail.com</p>
                                            <div className="h-px my-4 bg-gray-200"/>
                
                                            <button>
                                                <i className="mr-2 ri-logout-circle-r-line"></i>
                                                    Log Out
                                            </button>
                                        </div>
                                    
                                    </div>
                                }
                            </button>
                        </div>
                    
                </nav>

                <div className='p-6'>
                    {children}
                </div>
            </section>
        </div>
    </>
  )
}
