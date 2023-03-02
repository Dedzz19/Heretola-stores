import React from 'react'
import icon from './img/transcaction history.png'
import toiletries from './img/tolietries.png'
import necklace from './img/jewelry.png'
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function History() {
  const navigate=useNavigate()

  return (
    <div className='capitalize'>
     <span className='flex items-center gap-3'>
     <h1 className='lg:pl-48 pl-8 lg:text-5xl text-2xl font-bold'>Transaction History</h1>
     <img src={icon} alt='icon' className='lg:max-w-none md:max-w-xxsm sm:max-w-xxxs'/>
     </span>

     <section className='lg:pl-12 mx-auto bg-white shadow-sp pt-12 pb-32 md:w-9/12'>
      <div className=' flex lg:gap-96 md:gap-48 gap-4 items-center'>
        <h1 className='lg:pl-32 text-gray-300 font-semibold text-xs lg:text-xl'>Completed orders</h1>
        <h1 className='lg:text-xl text-xs font-bold md:px-8 md:py-2 p-3 bg-gray-200 rounded-full'>Pending orders</h1>
      </div>
      {/* First item */}
      <div className='flex mt-3 gap-2 lg:gap-10 items-center'>
        <img src={toiletries} alt='toiletries' className='md:max-w-xxs max-w-xxsm' />
        <span>
          <h3 className='font-bold text-xs lg:text-2xl'>toiletries</h3>
          <span className='flex items-center mt-2'>
          <h2 className='font-bold lg:text-base text-xxs'>order ID:</h2>
          <p className='lg:text-base text-xxs'>2211567RRTI</p>
          </span>
        </span>
      <div className='lg:ml-24 flex items-center gap-5 lg:gap-32'>
          <span>
          <h1 className='font-bold text-xs lg:text-2xl'>Qty</h1>
          <p className='text-center mt-2'>1</p>
        </span>
        <span>
          <h1 className='font-bold text-xs lg:text-2xl'>Price</h1>
          <p className='text-center mt-2'>₦25,000</p>
        </span>
        <span>
          <h1 className='font-bold text-xs lg:text-2xl'>status</h1>
          <p className='text-center mt-2'>Pending</p>
        </span>
          </div>

      </div>
      {/* second item */}
      <div className='flex mt-3 gap-2 lg:gap-10 items-center'>
        <img src={necklace} alt='toiletries' className='md:max-w-xxs max-w-xxsm' />
        <span>
          <h3 className='font-bold text-xs lg:text-2xl'>Necxklace</h3>
          <span className='flex items-center mt-2'>
          <h2 className='font-bold lg:text-base text-xxs'>order ID:</h2>
          <p className='lg:text-base text-xxs'>2211567RRTI</p>
          </span>
        </span>
      <div className='lg:ml-24 flex items-center gap-5 lg:gap-32'>
          <span>
          <h1 className='font-bold text-xs lg:text-2xl'>Qty</h1>
          <p className='text-center mt-2'>1</p>
        </span>
        <span>
          <h1 className='font-bold text-xs lg:text-2xl'>Price</h1>
          <p className='text-center mt-2'>₦25,000</p>
        </span>
        <span>
          <h1 className='font-bold text-xs lg:text-2xl'>status</h1>
          <p className='text-center mt-2'>Pending</p>
        </span>
          </div>

      </div>
     </section>

     <span onClick={()=>navigate(-1)} className='cursor-pointer flex items-center md:pl-48 place-content-center md:place-content-start mt-20' >
      <MdArrowBackIos className='text-xl font-bold'  />
      <p>Continue Shopping</p>
     </span>
    </div>
  )
}
