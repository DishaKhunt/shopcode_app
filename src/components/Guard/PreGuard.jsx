import React, { useEffect, useState } from 'react'
import firebaseAppConfig from '../../util/firebase-config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate, Outlet } from 'react-router-dom';

const auth = getAuth(firebaseAppConfig);

export default function PreGuard() {

    const [session, setSession] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
               setSession(user);
            }
            else{
                setSession(false);
            }
        });
    },[]);

    if(session === null)
    return(
        <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-100'>
        <span className='relative flex w-8 h-8'>
          <span className='absolute inline-flex w-full h-full bg-orange-600 rounded-full opacity-75 animate-ping'></span>
          <span className='relative inline-flex w-8 h-8 bg-orange-400 rounded-full'></span>
        </span>
      </div>
    )

    if(session)
    return <Navigate to='/'/>

    
    return <Outlet/>
}
