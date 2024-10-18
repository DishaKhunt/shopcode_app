import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../util/firebase-config';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const auth = getAuth(firebaseAppConfig);

export default function Signup() {

  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const [formValue, setFormValue] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const signup =  async(e)=>{
    try{
      e.preventDefault();
      setLoader(true);
      await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
      await updateProfile(auth.currentUser, {displayName: formValue.fullname});
      navigate('/');
      
    }
    catch(err){
      setError(err.message)
    }
    finally{
      setLoader(false);
    }
   
  }

  const handleOnChange =(e)=>{
    const input = e.target
    const name = input.name
    const value = input.value
    setFormValue({
      ...formValue,
      [name]: value
    })
    setError(null);
  }
  return (
    <div>
      <div className="grid h-screen md:grid-cols-2 md:overflow-hidden animate__animated animate__fadeIn">
        <img 
          src="/images/sign-up.svg" alt=""
          className='p-20 mx-auto md:p-36'
           />
        <div className='flex flex-col justify-center p-8 md:p-16'>
          {/* {JSON.stringify(formValue)} */}
          <h1 className='text-3xl font-bold'>New User</h1>
          <p className='text-lg text-gray-600'>Create your account to start shopping</p>

          <form action="" className='mt-8 space-y-6' onSubmit={signup}>
            <div className='flex flex-col '>
              <label className="mb-1 text-lg font-semibold">Full Name</label>
              <input 
                onChange={handleOnChange}
                type="text"
                name="fullname"
                placeholder='Disha Khunt'
                className='p-3 border border-gray-300 rounded outline-none'
                required
               />
            </div>

            <div className='flex flex-col'>
              <label className="mb-1 text-lg font-semibold">Email</label>
              <input 
                onChange={handleOnChange}
                type="email"
                name="email"
                placeholder='example@gmail.com'
                className='p-3 border border-gray-300 rounded outline-none'
                required
               />
            </div>

            <div className='relative flex flex-col'>
              <label className="mb-1 text-lg font-semibold">Password</label>
              <input 
                onChange={handleOnChange}
                type={passwordType}
                name='password'
                placeholder='*******'
                className='p-3 border border-gray-300 rounded outline-none'
                required
               />

              <button onClick={()=>setPasswordType(passwordType === "password" ? "text" : "password")} type="button" className='absolute w-8 h-8 rounded-full top-11 right-4 hover:bg-gray-200'>
                {
                  passwordType === "password" ?  
                  <i className='ri-eye-line'></i> 
                  :  
                  <i className='ri-eye-off-line'></i>
                }
               
               
              </button>

            </div>
            {
              loader ?
              <h1 className='font-serif text-lg text-gray-600'>Loading....</h1>
              :
              <button type='submit' className='px-12 py-3 font-semibold text-white bg-black rounded hover:shadow-lg hover:bg-orange-500'>Signup</button>
             
            }
           

            
            
          </form>
          <div className='mt-2'>
           Already have an account ? <Link to="/login" className='font-semibold text-orange-600'>Login</Link>
          </div>

          {
            error &&
            <div className='flex items-center justify-between p-3 mt-3 font-semibold rounded shadow-lg text-rose-700 bg-rose-200 font animate_animated animate-pulse'>
              <p>{error}</p>
              <button onClick={()=>setError(null)}>
                <i className='ri-close-line'></i>
              </button>
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}
