import React, { useState } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import bags from './img/bags.png'
import circle from './img/circle.png'
import mastercard from './img/MASTERCARD.png'
import verve from './img/Verve.png'
import visa from './img/VISA.png'

export default function Refund() {
  return (
    <>
      <div className='lg:bottom-40 lg:inset-x-36'>
    </div>
    <div className='md:grid grid-cols-cart grid-rows-1'>
    <section className='md:ml-20 ml-10  pt-3'>
      <span className='flex items-center' >
      <MdArrowBackIos className='text-xl font-bold'  />
      <p>Continue Shopping</p>
      </span>
        <section className='md:flex items-center mt-12'>
          <img src={bags} alt='bags' />
          <div>
            <h1 className='text-4xl font-semibold'>Order ID: 12679HHQI9</h1>
            <span className='mt-3 gap-4 flex items-center'>
            <h2 className='font-bold text-3xl '>Gucci Bags</h2>
            <img src={circle}  alt='circle'/>
            </span>
            <h6 className=' text-lg font-semibold'>N16,000</h6>
            <p className='mt-1 font-semibold'>Quantity : 1 </p>
            <p className='mt-1 font-semibold'>Reason for Return : Product wasn’t what i expected </p>
            <p className='mt-1 font-semibold'>Status: Pending </p>
          </div>
        </section>
        <div className='mt-8'>
          <h2 className='font-semibold text-3xl'>Refund payment Bank Card</h2>
          <span className='flex items-center'>
            <img src={mastercard} alt='mastercard'/>
            <h5 className='font-semibold'>5399 1220 7840 2220</h5>
          </span>
          <span className='mt-5 flex items-center'>
            <p className='font-semibold'>Note:</p>
            <p className='italic'>kindly check this page from time to time to know the status of your refund</p>
          </span>
        </div>
        <div>
          <h2 className='text-3xl font-semibold py-8'>Delivery & Refund Policy</h2>
          <span className='flex items-center gap-4'>
            <h1 className='bg-primary text-white font-semibold rounded-full px-4 py-2'>1</h1>
            <p className='font-semibold'> Free delivery is available for the first 5 orders you make from us.</p>
          </span>
          <span className='py-3 flex items-center gap-4'>
            <h1 className='bg-primary text-white font-semibold rounded-full px-4 py-2'>2</h1>
            <p className='font-semibold'>   Once order is initiated, you should receive your order after 5 working days at max</p>
          </span>
          <span className='flex items-center gap-4'>
            <h1 className='bg-primary text-white font-semibold rounded-full px-4 py-2'>3</h1>
            <p className='text-center font-semibold'>In  cases where you dont get exactly what you ordered, there is a refund policy that<br />
      gives a refund after 5 working days 
</p>
          </span>
        </div>

    </section>
    <div className='bg-primary h-screen rounded-t-3xl lg:rounded-tl-3xl md:rounded-tr-none text-white py-24 '>
      <p className='text-center mb-12'> Change Refund Payment method</p>
      <h3 className='text-4xl text-center mb-12'>Card Details</h3>
    <p className='ml-12 text-xl'>Select Card Type</p>
    <span className='flex items-center lg:ml-12 gap-3'>
    <img src={mastercard} alt='mastercard' className=' md:max-w-xxxs xl:max-w-none' />
    <img src={visa} alt='visa'className=' md:max-w-xxxs xl:max-w-none' />
    <img src={verve} alt='verve' className=' md:max-w-xxxs xl:max-w-xxs'/>
    </span>
    <div className='mt-12'>
      <h1 className='lg:ml-20'>Card Number</h1>
      <input type='number' className=' xl:ml-24 bg-primary border-b-white border-2 border-primary outline-none' />
    </div>
    <div className='mt-12 flex'>
      <div>
      <h1 className='ml-20'>Expiry date</h1>
     <span className='flex gap-0'>
     <input type='number' className='w-2/12 ml-20 bg-primary border-b-white border-2 border-primary outline-none' />
     /
      <input type='number' className='w-2/12 bg-primary border-b-white border-2 border-primary outline-none' />
      /
      <input type='number' className='w-2/12 bg-primary border-b-white border-2 border-primary outline-none' />
     </span>
      </div>
     <span>
      <h1>Cvv</h1>
      <input type='number' className='w-11/12 bg-primary border-b-white border-2 border-primary outline-none' />
     </span>
    </div>
    {/* checkout button */}
      <div className='text-center mt-12'>
      <button  className='text-2xl text-black px-10 py-2 bg-white font-semibold rounded-full'>Change</button>
      </div>
    </div>
    </div>
    </>
    
  )
}
