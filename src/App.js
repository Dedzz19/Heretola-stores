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
        <Route path='/Heretola-stores/' element={<Home />} />
        <Route path='/Heretola-stores/login' element={<Login />}/>
        <Route path='/Heretola-stores/Sign Up' element={<Sign />}/>
         <Route path='/Heretola-stores/Cart' element={ <Cart />}/>
         <Route path='/Heretola-stores/Location' element={<Location />} />
         <Route path='/Heretola-stores/Confirmed' element={<Order />} />
         <Route path='/Heretola-stores/About Us' element={<About />} />
         <Route path='/Heretola-stores/Refund' element={<Refund />} />
         <Route path='/Heretola-stores/History' element={<History />}/>
         <Route path='/Heretola-stores/Dashboard' element={<Dashboard />}/>
         <Route path='/Heretola-stores/Product page' element={<Product />}/>
      </Routes>
    </div>
  )
}
