import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./img/logo 1.png"
import Cart from './img/Cart1 2.png'
import delivery from './img/delivery.png'
import quality from './img/Quality.png'
import usability from './img/usablity.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Cart2 from './img/CART 2.png'
import persona from "./img/Persona.png"
import discount from './img/discount.png'
export default function Home() {
  return (
    <>
    <section className='md:mx-24 mx-12 mt-8'>
      <div className='flex items-center mb-12'>
      <img src={Logo} alt='Logo' />
      <h1 className='font-black text-2xl'> Hertola Stores</h1>
      <span className='md:flex hidden ml-auto gap-10'>
        <Link to='/Heretola-stores/login' className='font-semibold'>Login</Link>
        <Link to='/Heretola-stores/About Us' className='text-white px-5 rounded-2xl py-1 font-semibold bg-red-500'>About Us</Link>
      </span>
      <span className='block md:hidden ml-auto p-3 bg-primary rounded-full text-white'>
        <GiHamburgerMenu />
      </span>
      </div>
      <div className='md:flex items-center'>
        <span className='mr-auto'>
        <h1 className='lg:text-4xl text-2xl pb-12 font-bold leading-tight'>SHOP QUALITY <br /> AND ENJOY YOUR <br />ORDER</h1>
        <Link to='/Heretola-stores/Sign Up' className='text-white w-max bg-red-500 font-semibold md:p-6 p-3 text-2xl rounded-full'>GET STARTED</Link>
        </span>
        <img className='lg:mr-4 ' src={Cart} alt='Cart'/>
      </div>
      <div className='md:grid grid-cols-4 gap-4 grid-rows-1 block py-12'>
        <span className=' pt-5 text-center md:text-start'>
        <img className='mx-auto md:mx-0 pt-5' src={usability} alt='usability' />
        <h3 className='text-base'>Usability</h3>
        <p className='text-sm'>Usability established <br />across every pages<br />of our web app.</p>
        </span>
        <span className='text-center md:text-start'>
        <img className='mx-auto md:mx-0 pt-5' src={quality} alt='Quality' />
        <h3 className='text-base'>Quality products</h3>
        <p className='text-sm'>100% quality products<br />with maximum consumer<br />satisfaction</p>
        </span>
        <span className='text-center mt-5 md:text-start'>
          <p className='bg-red-500 mx-auto md:mx-0 text-white p-12 w-fit rounded-full md:my-8 mt-8'>20% OFF</p>
          <h3 className='text-base'>20% discount on first order</h3>
          <p className='text-sm'> 20% dicount on every order  you make</p>
        </span>
        <span className='text-center md:text-start'>
          <img className='mx-auto md:mx-0 lg:my-10' src={delivery} alt='Delivery'/>
          <h3 className='text-base'>Low or no shipping fee</h3>
          <p className='text-sm'>Low shipping Fee guaranteed </p>
        </span>
      </div>
     
    </section>
    {/* Brand you will love and trust Section */}
    <div className=' bg-primary p-12 lg:pl-40 '>
      <h1 className='text-white font-semibold text-4xl'>A BRAND YOU WOULD LOVE AND TRUST</h1>
      <span className='md:flex'>
        <span className='mr-auto'>
        <h2 className='text-white py-6 text-2xl font-light'> With different products ranging <br/>from fashion, food , clothing , Jeweleries<br />and toiletries , we have products that<br />suit your satisfaction</h2>
        <Link to='/Heretola-stores/Sign Up' className='text-white px-5 rounded-2xl py-3 font-semibold bg-red-500'>Register Now</Link>
        </span>
        <img src={Cart2} alt='Cart 2' className='animate-pulse md:max-w-sm mt-12 md:mt-0 sm:max-w-xxs ' />
      </span>
    </div>
    {/* Testimonials section */}
    <div className='mt-12'>
      <h1 className='text-center md:text-5xl font-bold uppercase'>Testimonials</h1>
      <p className='text-center'>we have received positive feedback and responses from our customers</p>
      <span className='place-content-center flex items-center gap-12 my-20'>
        <MdArrowBackIos className='text-6xl font-bold text-gray-600' />
        <span className='block'>
        <img src={persona} alt='persona' />
        <h6 className='text-center text-2xl font-semibold pt-4'>A .A  James</h6>
        </span>
        <p className=' leading-snug font-medium sm:text-2xl'>What an amazing brand, awesome<br />usability features, i ordered and i got exactly what<br />i wanted. I Would recommend this store to anyone.</p>
        <MdArrowForwardIos className='text-6xl font-black text-gray-600' />
      </span>
     
      <div className=' bg-gray-300 grid grid-cols-2 grid-rows-1'>
        <img src={discount} alt='discount' />
        <span className='my-auto py-5 gap-20'>
          <h1 className='lg:text-5xl sm:text-2xl font-semibold'>PROMOTIONS</h1>
          <p className='lg:text-3xl lg:py-12 py-8'>50% discount<br />on every product order<br />you make</p>
          <Link to='/Heretola-stores/Sign Up' className='text-white md:px-6 rounded-2xl py-3 font-semibold bg-red-500'>Get Started</Link>
        </span>

      </div>
    </div>

    </>
  )
}


