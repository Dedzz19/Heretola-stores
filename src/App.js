import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Dashboard from './Dashboard'
import History from './History'
import Home from './Home'
import Location from './Location'
import Login from './Login'
import Order from './Order'
import Product from './Product'
import Refund from './Refund'
import Sign from './Sign'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/Sign Up' element={<Sign />}/>
         <Route path='/Cart' element={ <Cart />}/>
         <Route path='/Location' element={<Location />} />
         <Route path='/Confirmed' element={<Order />} />
         <Route path='/About Us' element={<About />} />
         <Route path='/Refund' element={<Refund />} />
         <Route path='/History' element={<History />}/>
         <Route path='/Dashboard' element={<Dashboard />}/>
         <Route path='/Product page' element={<Product />}/>
      </Routes>
    </div>
  )
}
