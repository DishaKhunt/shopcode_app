import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../util/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth(firebaseAppConfig);

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menus = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/category' },
    { label: 'Contact us', href: '/contact-us' },
  ];

  const mobileLink = (href) => {
    navigate(href);
    setOpen(false); // Fix typo: setOpen(false) instead of setOpen(flase)\
  };

  if (session === null) 
    return (
      <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-100'>
        <span className='relative flex w-8 h-8'>
          <span className='absolute inline-flex w-full h-full bg-orange-600 rounded-full opacity-75 animate-ping'></span>
          <span className='relative inline-flex w-8 h-8 bg-orange-400 rounded-full'></span>
        </span>
      </div>
    );
  

  return (
    <div>
      {/* Navbar */}
      <nav className='sticky top-0 left-0 z-50 w-full bg-white shadow-lg'>
        <div className='flex items-center justify-between w-10/12 p-3 mx-auto bg-white'>
          <div className='flex items-end logo'>
            <img src='/images/shopcode-logo.jpg' alt='' className='w-8 h-8' />
            <h1 className='font-serif text-xl font-bold'>Shopcode</h1>
          </div>
          <button
            className='block px-2 py-1 hover:bg-black hover:text-white md:hidden'
            onClick={() => setOpen(!open)}
          >
            <i className='text-3xl ri-menu-3-fill'></i>
          </button>
          <ul className='items-center hidden gap-4 md:flex'>
            {menus.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className='block py-2 text-center hover:bg-black hover:text-white w-[100px]'
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!session && (
              <>
                <Link
                  className='block py-2 text-center hover:bg-black hover:text-white w-[100px]'
                  to='/login'
                >
                  Login
                </Link>
                <Link
                  className='block px-8 py-2 font-semibold text-center text-white bg-black shadow'
                  to='/sign-up'
                >
                  Sign up
                </Link>
              </>
            )}
            {session && (
              <button className='relative' onClick={() => setAccountMenu(!accountMenu)}>
                <img
                  src={session.photoURL ? session.photoURL : '/images/avt.jpg'}
                  alt=''
                  className='w-10 h-10 rounded-full shadow-lg'
                />
                {accountMenu && (
                  <div className='flex flex-col items-start w-[150px] z-50 py-3 bg-white animate__animated animate__fadeIn absolute top-12 shadow-xl right-0'>
                    
                    <Link
                      to='/profile'
                      className='w-full px-3 py-2 text-left hover:bg-black hover:text-white'
                    >
                      <i className='mr-2 ri-user-line'></i> My Profile
                    </Link>
                    <Link
                      to='/cart'
                      className='w-full px-3 py-2 text-left hover:bg-black hover:text-white'
                    >
                      <i className='mr-2 ri-shopping-cart-line'></i> Cart
                    </Link>
                    <button
                      className='w-full px-3 py-2 text-left hover:bg-black hover:text-white'
                      onClick={handleLogout}
                    >
                      <i className='mr-2 ri-logout-circle-r-line'></i> Logout
                    </button>
                  </div>
                )}
              </button>
            )}
          </ul>
        </div>
      </nav>

      <div>{children}</div>

      {/* Footer */}
      <footer className='py-16 bg-orange-600'>
        <div className='grid w-10/12 gap-8 mx-auto md:gap-10 md:grid-cols-4'>
          <div className='pr-6'>
            <h1 className='mb-3 text-2xl font-semibold text-white'>Brand Details</h1>
            <p className='mb-6 text-gray-100'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum dignissimos ipsum accusantium fugit veritatis voluptates.
            </p>
            <div className='flex items-end logo'>
              <img src='/images/shopcode-logo.jpg' alt='' className='w-8 h-8 rounded-full' />
              <h1 className='font-serif text-xl font-bold'>Shopcode</h1>
            </div>
          </div>
          <div>
            <h1 className='mb-3 text-2xl font-semibold text-white'>Website Links</h1>
            <ul className='space-y-2 text-gray-50'>
              {menus.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/sign-up'>Sign Up</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='mb-3 text-2xl font-semibold text-white'>Website Links</h1>
            <ul className='space-y-2 text-gray-50'>
              <li>
                <Link to='/'>Facebook</Link>
              </li>
              <li>
                <Link to='/'>Youtube</Link>
              </li>
              <li>
                <Link to='/'>Twitter</Link>
              </li>
              <li>
                <Link to='/'>LinkedIn</Link>
              </li>
              <li>
                <Link to='/'>Instagram</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='mb-3 text-2xl font-semibold text-white'>Contact Us</h1>
            <form action='' className='space-y-4'>
              <input
                type='text'
                name='fullname'
                className='w-full p-2 bg-white rounded'
                placeholder='Full Name'
                required
              />
              <input
                type='email'
                name='email'
                className='w-full p-2 bg-white rounded'
                placeholder='Email Address'
                required
              />
              <textarea
                name='message'
                className='w-full p-2 bg-white rounded'
                placeholder='Message'
                required
                rows={3}
              ></textarea>
              <button className='px-5 py-2 text-white bg-black rounded'>Submit</button>
            </form>
          </div>
        </div>
      </footer>

      <aside
        className='fixed top-0 left-0 z-50 h-full overflow-hidden bg-black shadow-lg'
        style={{
          width: open ? 270 : 0,
          transition: '0.3s',
        }}
      >
        <div className='flex flex-col gap-6 p-8'>

            {session && (
              <button className='relative' onClick={() => setAccountMenu(!accountMenu)}>
                <div className='flex items-center gap-3'>
                  <img
                    src={session.photoURL ? session.photoURL : '/images/avt.jpg'}
                    alt=''
                    className='w-10 h-10 rounded-full shadow-lg'
                  />
                  <div className='text-sm'>
                    <p className='text-left text-white capitalize'>{session.displayName}</p>
                    <p className='text-white'>{session.email}</p>
                  </div>
                   
                </div>

                <hr className="my-6" />
               
                {accountMenu && (
                  <div className='flex flex-col items-start w-[150px] z-50 py-3 bg-white animate__animated animate__fadeIn absolute top-12 shadow-xl right-0'>
                    
                    <Link
                      to='/profile'
                      className='w-full px-3 py-2 text-left hover:bg-black hover:text-white'
                    >
                      <i className='mr-2 ri-user-line'></i> My Profile
                    </Link>
                    <Link
                      to='/cart'
                      className='w-full px-3 py-2 text-left hover:bg-black hover:text-white'
                    >
                      <i className='mr-2 ri-shopping-cart-line'></i> Cart
                    </Link>
                    <button
                      className='w-full px-3 py-2 text-left hover:bg-black hover:text-white'
                      onClick={handleLogout}
                    >
                      <i className='mr-2 ri-logout-circle-r-line'></i> Logout
                    </button>
                  </div>
                )}
              </button>
            )}
            
          {menus.map((item, index) => (
            <button
              onClick={() => mobileLink(item.href)}
              key={index}
              className='py-2 text-white hover:bg-orange-600'
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
