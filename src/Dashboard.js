import React, { useState } from 'react'
import Menu from '../src/Components/Menu.jsx'
import { IoMenu } from 'react-icons/io5'
import user from './img/user.png'
import history from './img/transcaction history.png'
import cart from './img/Cart icon.png'
import {CiSearch} from 'react-icons/ci'
import sale from './img/discount.png'
import necklace from './img/jewelry.png'
import cosmetics from './img/cosmetics.png'
import toiletries from './img/tolietries.png'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const[menuDisplay, setMenuDisplay]=useState('hidden')

  function menu(){
    setMenuDisplay('block')
  }
  function close(){
    setMenuDisplay('hidden')
  }
  return (
    <section>
      <div>
      <Menu display={menuDisplay} close={close} position="fixed" />
      </div>
      <header className={`relative py-8 md:mx-24 flex place-content-center gap-4 md:gap-20 items-center`}>
       <span onClick={menu} className='text-white text-4xl py-2 px-2 cursor-pointer bg-primary rounded-full'>
       <IoMenu/>
       </span>
       <div className='flex items-center'>
       <img src={user} alt='user' className='max-w-xxsm md:max-w-xxs'/>
       <span>
        <h3 className='font-semibold'>Good Morning, Micheal,</h3>
        <p>how is your day going?</p>
       </span>
       </div>
       <div className='flex items-center'>
      <Link to='/Heretola-stores/History'>
      <img src={history} alt='history' className='md:max-w-xxs max-h-20 md:max-h-32'/>
      </Link>
       <Link to='/Heretola-stores/Cart' className='flex'>
       <img src={cart} alt='cart' className='md:max-w-xxs max-h-12 md:max-h-32'/>
       <p className=' -mx-3 text-white bg-red-500 h-fit px-2 rounded-full'>5</p>
       </Link>
       </div>
      </header>
      <div className='flex shadow-sp mx-auto items-center px-4 rounded-full md:w-6/12'>
        <input type='text' placeholder='search for product' className='outline-none w-11/12 text-center py-2'/>
        <span className='bg-gray-300 cursor-pointer text-xl p-3 rounded-xl'>
        <CiSearch />
        </span>
      </div>
      {/* first order advert */}
      <div className='flex bg-primary rounded-3xl items-center mt-5 mx-5 md:mx-32 xl:mx-80 place-content-center'>
        <img src={sale} alt='' className='max-w-xxs md:max-w-xs'/>
        <h1 className='text-white text-2xl md:text-6xl font-bold'>Make your first<br/> order</h1>
      </div>
      
      <body className='lg:mx-80 py-4'>
        <h2 className='text-3xl font-bold py-6'>Most Ordered Product</h2>
       <section className='grid grid-cols-3 gap-3 grid-rows-1'>
       <div className='text-center'>
        <Link to='/Heretola-stores/Product page'><img src={necklace} alt='' className='md:h-40 mx-auto md:max-w-none max-w-xxs h-20'/></Link>
          <span className='mx-auto'>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={cosmetics} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={toiletries} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>
       </section>

       <h2 className='text-3xl font-bold py-6'>Cosmetics And Fashion</h2>
       <section className='grid grid-cols-3 gap-3 grid-rows-1'>
       <div className='text-center'>
        <Link to='/Heretola-stores/Product page'><img src={necklace} alt='' className='md:h-40 mx-auto md:max-w-none max-w-xxs h-20'/></Link>
          <span className='mx-auto'>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={cosmetics} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={toiletries} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>
       </section>

       <h2 className='text-3xl font-bold py-6'>Clothing</h2>
       <section className='grid grid-cols-3 gap-3 grid-rows-1'>
       <div className='text-center'>
        <Link to='/Heretola-stores/Product page'><img src={necklace} alt='' className='md:h-40 mx-auto md:max-w-none max-w-xxs h-20'/></Link>
          <span className='mx-auto'>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={cosmetics} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={toiletries} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>
       </section>

       <h2 className='text-3xl font-bold py-6'>Beverages</h2>
       <section className='grid grid-cols-3 gap-3 grid-rows-1'>
       <div className='text-center'>
        <Link to='/Heretola-stores/Product page'><img src={necklace} alt='' className='md:h-40 mx-auto md:max-w-none max-w-xxs h-20'/></Link>
          <span className='mx-auto'>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={cosmetics} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>

        <div className='text-center'>
          <Link to='/Heretola-stores/Product page'><img src={toiletries} alt='' className='md:max-w-none max-w-xxs h-20 md:h-40 mx-auto'/></Link>
          <h6 className='font-bold'>Necklace</h6>
          <p className='my-1'>N25,000</p>
          <span className='flex place-content-center'>
          <h4 className='text-white  px-3 bg-primary py-2 rounded-full '>Add to cart</h4>
          </span>
        </div>
       </section>
      </body>

    </section>
  )
}
