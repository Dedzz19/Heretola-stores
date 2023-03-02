import React from 'react'
import { Link } from 'react-router-dom'
import smily from './img/UP 1.png'
import { MdArrowBackIos } from "react-icons/md";
export default function Order() {
  return (
    <section className='md:flex items-center place-content-center my-24'>
      <img src={smily} alt="Confirmed" className=''/>
      <div>
        <h1 className='lg:-mt-3 mx-auto lg:text-7xl text-4xl font-medium'>Your order <br /> is on the Way</h1>
        <Link className='flex items-center bg-primary w-fit px-4 py-3 mt-4 rounded-full animate-pulse' to='/Heretola-stores/'>
        <MdArrowBackIos className='text-3xl font-bold text-gray-600' />
        <p className='font-bold text-lg text-white'>Continue shopping</p>
        </Link>
      </div>
    </section>
  )
}
