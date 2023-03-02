import React from 'react'
import { IoMenu } from 'react-icons/io5'
import history from './img/transcaction history.png'
import cart from './img/Cart icon.png'
import bags from './img/bags.png'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div>
    <header className='flex items-center md:mx-20'>
      <div className='flex items-center mr-auto'>
      <span className='md:ml-24 my-3 mr-5 bg-primary w-fit py-1 px-2 rounded-full'>
       <IoMenu className='text-4xl text-white'/>
       </span>
       <h2 className='text-xl font-bold'>Heretola stores</h2>
      </div>
      <Link to='/History' className='mr-3'>
      <img src={history} alt='history' className='max-h-12 md:max-h-24 '/>
      </Link>
       <Link to='/Cart' className='flex'>
       <img src={cart} alt='cart' className='max-h-12 md:max-h-24'/>
       <p className=' -mx-3 text-white bg-red-500 h-fit px-2 rounded-full'>5</p>
       </Link>
    </header>
    <div className='mt-3 bg-primary w-screen flex items-center place-content-center gap-3 md:gap-24 md:text-2xl text-xs text-white font-medium py-2'>
      <span>
        <h2>Free shipping fee</h2>
      </span>
      <span className='flex items-center gap-2'>
        <h2 className='font-bold'>50%</h2>
        <h2> Discount on first order</h2>
      </span>
      <span>
        <h2>Fast delivery</h2>
      </span>
    </div>

    <body className='md:grid grid-cols-2 lg:mx-24 grid-rows-1'>
      <div className='bg-gray-200 px-4 lg:px-16 pt-24'>
        <img src={bags} alt='' className='mx-auto max-w-lg'/>
        <h4 className='text-xl font-semibold py-3'>Choose color</h4>
        <span className='flex gap-3 pb-3 items-center'>
          <p className='bg-red-600 px-4 text-red-600 py-2 rounded-full w-fit max-h-fit '>t</p>
          <p className='bg-blue-600 px-4 text-blue-600 py-2 rounded-full w-fit max-h-fit '>t</p>
          <p className='bg-blue-200 px-4 text-blue-200 py-2 rounded-full w-fit max-h-fit '>t</p>
          <p className='bg-purple-700 px-4 text-purple-700 py-2 rounded-full w-fit max-h-fit '>t</p>
        </span>
        <h3 className='text-xl font-semibold py-3'>Product Description</h3>
        <p className='font-medium'>Gucci bags at different colors ato suite<br />your needs and your outfit, suitable for<br />any occasion.</p>
        <span>
        <h2 className='text-xl font-semibold py-3'>What You Would Get</h2>
        <ol className='list-decimal font-medium px-2'>
          <li>Desired bag color you ordered</li>
          <li>Free Additional Gift for First Time users</li>
        </ol>
      </span>
      </div>

      <div className='pt-32'>
        <h1 className='py-3 text-6xl font-semibold align-middle flex place-content-center'>Gucci Bags</h1>
        <p className='lg:pr-64 text-xl flex place-content-center font-medium py-3'>₦16,000</p>
       <span className='lg:pr-64 flex place-content-center'>
       <button className='text-white bg-primary ml-10 px-6 py-3 text-xl font-thin'>Add to cart</button>
       </span>
        <h4 className='py-24 flex place-content-center font-semibold text-xl'>Free delivery and refund</h4>
      </div>
    </body>
      <footer className='py-24 px-12 lg:px-48 gap-24 text-white grid grid-cols-2 grid-rows-1 bg-primary rounded-t-3xl'>
        <div>
          <h1 className='text-4xl font-semibold pb-3'>Customer info</h1>
          <span >
            <h3 className='text-xl font-semibold py-1'>Track your order</h3>
            <h3 className='text-xl font-semibold py-1'>About us</h3>
            <Link to='/Confirmed'><h3 className='text-xl font-semibold py-1'>My orders</h3></Link>
            <h3 className='text-xl font-semibold py-1'>Contact us</h3>
            <h3 className='text-xl font-semibold py-1'>Free Delivery & Refund</h3>
          </span>
        </div>
        <div>
          <h1 className='text-4xl font-semibold pb-3'>Brand info</h1>
          <Link to='/About Us' className='cursor-pointer'>
          <h3 className='text-xl font-semibold'>About us</h3>
          </Link>
        </div>
      </footer>
  </div>
  )
}
