import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'animate.css';
import NotFound from './components/NotFound'
import AdminProducts from './components/Admin/Products'
import Order from './components/Admin/Order'
import Customers from './components/Admin/Customers'
import Dashboard from './components/Admin/Dashboard'
import Payments from './components/Admin/Payments'
import Settings from './components/Admin/Settings'
import Admin from './components/Admin'
import Home from './components/Home'
import Products from './components/Products'
import Category from './components/Category'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import ContactUs from './components/ContactUs';
import PreGuard from './components/Guard/PreGuard';
import Cart from './components/Cart';
import Profile from './components/Profile';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route element={<PreGuard/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
          </Route>

         


          <Route path='/admin'>
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='products' element={<AdminProducts/>} />
            <Route path='orders' element={<Order/>} />
            <Route path='payments' element={<Payments/>} />
            <Route path='settings' element={<Settings/>} />
            <Route path='auth' element={<Admin/>} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
