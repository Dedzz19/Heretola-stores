import React from 'react'
import logo from './img/logo 1.png'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='md:grid grid-rows-1 grid-cols-3'>
    <img src={logo} alt='logo' />
    <div className='bg-primary rounded-tl-3xl rounded-br-3xl text-white text-center py-12 md:h-screen'>
      <h1 className='text-4xl font-bold'>About Us</h1>
      <p className='flex place-content-center text-start'>Hertola stores is specializes in foods,<br /> beverages, clothing, cosmetics and<br /> the company has craved a niched<br />in each of this retrospective sphere.<br />They offer quality Product at an<br /> affordable price. <br />Delivery is fast and  top notch.</p>
    </div>
   <section className='ml-auto mr-12'>
    <Link className='flex items-center' to='/' >
      <MdArrowBackIos className='text-xl font-bold'  />
      <p>Continue Shopping</p>
      </Link>
   </section>
    </div>
  )
}
