import React, { useEffect, useState } from 'react';
import firebaseAppConfig from '../util/firebase-config';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Swal from 'sweetalert2';
import { getFirestore, collection, addDoc, where, getDocs, query, updateDoc } from 'firebase/firestore';

const auth = getAuth(firebaseAppConfig);
const db =getFirestore(firebaseAppConfig);
const storage = getStorage();


export default function Profile() {

  const [uploading , setUploading] = useState(false);
  const navigate = useNavigate()
  const [session, setSession] = useState(null);

  const [formValue, setFormValue] = useState({
    fullname: '',
    email: '',
    phone: ''
  })

  const [isAddress, setIsAddress]= useState(false);

  const [addressFormValue, setAddressFormValue] = useState({
    address: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    userId: ''
  })


  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      if(user){
          setSession(user)
      }
      else{
        setSession(false)
        navigate('/login');
      }
    })
  },[])

  useEffect(()=>{

    const req = async ()=>{

      if(session)
      {
        setFormValue({
          ...formValue,
          fullname: session.displayName ,
          phone: (session.phoneNumber ? session.phoneNumber : '')
        })


        setAddressFormValue({
          ...addressFormValue,
          userId: session.uid
        })

        // fetch address
       const ref = collection(db, "addresses")
       const q = query(ref, where("userId", "==", session.uid));
       const snapshot = await getDocs(q);

       setIsAddress(!snapshot.empty);

       snapshot.forEach((doc)=>{
        const address = doc.data();
        setAddressFormValue({
          ...addressFormValue,
          ...address
        })
       })

      }

    }
    req();
  },[session])



  const setProfilePicture =  async (e)=>{
    const input = e.target
    const file = input.files[0]
    const filenameArray = file.name.split(".");
    const ext = filenameArray[filenameArray.length-1];
    const filename = Date.now()+'.'+ext
    const path = `pictures/${filename}`;
    const bucket = ref(storage, path );
    setUploading(true);
    const snapshot =  await uploadBytes(bucket, file);
    const url = await getDownloadURL(snapshot.ref);
    await updateProfile(auth.currentUser, {
      photoURL: url
    })
    setUploading(false);
    setSession({
      ...session,
      photoURL: url
    })
  }

  
  const saveProfileInfo = async (e)=>{
    e.preventDefault();
    await updateProfile(auth.currentUser, {
      displayName: formValue.fullname,
      phoneNumber: formValue.phone
    })
    new Swal({
      icon : 'success',
      title: 'Profile Saved !'
    })
  }

  const handleFormValue = (e)=>{
    const input =  e.target
    const name = input.name
    const value = input.value

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleAddressFormValue = (e)=>{
    const input =  e.target
    const name = input.name
    const value = input.value

    setAddressFormValue({
      ...addressFormValue,
      [name]: value
    })

  }


  const setAddress = async (e)=>{
    try{
      e.preventDefault();
      await addDoc(collection(db, "addresses"), addressFormValue);
      new Swal({
        icon: 'success',
        title: "Address Saved !"
      })
     
    }
    catch(err){
      new Swal({
        icon: 'error',
        title: "Failed !",
        text : err.message
      })
    }
   
  }

  const updateAddress = async (e)=>{
    try{
      e.preventDefault();
      const col = collection(db, "addresses")
      const q = query(col, where("userId", "==", session.uid));
      updateDoc(q, addressForm);
      
      new Swal({
        icon: 'success',
        title: "Address Updated !"
      })
     
    }
    catch(err){
      new Swal({
        icon: 'error',
        title: "Failed !",
        text : err.message
      })
    }
   
  }



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
      <Layout>
        <div className="p-8 mx-auto bg-white rounded-lg shadow-lg md:w-7/12 md:my-16">
          <h1 className='font-serif text-3xl font-bold text-center text-gray-800 md:text-4xl'>
            <i className="mr-2 ri-user-line"></i>
            Profile
          </h1>
          <p className="mb-6 text-center text-gray-500">Manage your profile information</p>

          <hr className="my-6" />

          <div className='relative w-24 h-24 mx-auto mb-6'>
            {
              uploading ?
              <img src="/images/loader.gif" alt="" />
              :
              <img src={session.photoURL ? session.photoURL : "/images/avt.jpg" } alt="" className='w-24 h-24 mx-auto rounded-full shadow-md '/>   


            }
           
                 
            <input type="file" accept='images/*' className='absolute top-0 left-0 w-full h-full opacity-0' onChange={setProfilePicture} />
          </div>

          

          <form className='grid gap-6 md:grid-cols-2' onSubmit={saveProfileInfo} >
            {/* Full Name */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Full Name</label>
              <input 
                onChange={handleFormValue}
                type="text"
                name="fullname"
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                value={formValue.fullname}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Email</label>
              <input 
                onChange={handleFormValue}
                type="email"
                name="email"
                disabled
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                value={session.email}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Phone Number</label>
              <input 
                onChange={handleFormValue}
                type="tel"
                name="phone"
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                value={formValue.phone}
                placeholder="Enter your phone number"
                required
              />
            </div>


            {/* Save Button */}
            <div className="col-span-2">
              <button 
                type="submit" 
                className='w-full p-3 mt-6 font-semibold text-white transition-shadow bg-black rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400'>
                    <i className="mr-2 ri-save-line"></i>
                Save Changes
              </button>
            </div>
          </form>
        </div>


        <div className="p-8 mx-auto bg-white rounded-lg shadow-lg md:w-7/12 md:my-16">
          <h1 className='font-serif text-2xl font-bold text-center text-gray-800 md:text-4xl'>
            <i className="mr-2 ri-link-unlink-m"></i>
             Delivery Address
          </h1>
          <p className="mb-6 text-center text-gray-500">Manage your delivery address information</p>

          <hr className="my-6" />          

          <form className='grid gap-6 md:grid-cols-2' onSubmit={ isAddress ? updateAddress : setAddress} >
            
            {/* Address */}
            <div className='flex flex-col col-span-2 gap-2'>
              <label className="text-lg font-semibold text-gray-700">Address</label>
              <input 
                onChange={handleAddressFormValue}
                type="text"
                name="address"
                value={addressFormValue.address}
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder="Enter your address"
                required
              />
            </div>

            {/* Town/City */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Town/City</label>
              <input 
                onChange={handleAddressFormValue}
                type="text"
                name="city"
                value={addressFormValue.city}
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder="Enter your town or city"
                required
              />
            </div>

            {/* Region/State */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Region/State</label>
              <input 
                onChange={handleAddressFormValue}
                type="text"
                name="state"
                value={addressFormValue.state}
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder="Enter your region or state"
                required
              />
            </div>

            {/* Postcode */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Postcode</label>
              <input 
                onChange={handleAddressFormValue}
                type="text"
                name="postcode"
                value={addressFormValue.postcode}
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder="Enter your postcode"
                required
              />
            </div>

            {/* Country */}
            <div className='flex flex-col gap-2'>
              <label className="text-lg font-semibold text-gray-700">Country</label>
              <input 
                onChange={handleAddressFormValue}
                type="text"
                name="country"
                value={addressFormValue.country}
                className='p-3 transition-shadow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder="Enter your country"
                required
              />
            </div>

            {/* Save Button */}
            <div className="col-span-2">
              <button 
                type="submit" 
                className='w-full p-3 mt-6 font-semibold text-white transition-shadow bg-black rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400'>
                    <i className="mr-2 ri-save-line"></i>
                Save Changes
              </button>
            </div>
          </form>

        
        </div>
      </Layout>
    </div>
  );
}
