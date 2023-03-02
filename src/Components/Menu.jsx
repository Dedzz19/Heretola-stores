import React from 'react'
import logo from'../img/logo 1.png'
import { IoIosHome, IoMdColorPalette,IoIosBeer } from 'react-icons/io'
import {IoFastFood, IoLogOut} from 'react-icons/io5'
import { MdNoDrinks } from "react-icons/md";
import { GiWineBottle,GiClothes,GiPearlNecklace,GiSoap } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import track from '../img/transcaction history.png'
import cart from '../img/Cart icon.png'
import { Link } from 'react-router-dom';
export default function Menu(props) {
  return (
    <section className={`${props.display} ${props.position} pt-4 bg-gray-300 xl:w-2/12 md:w-3/12 sm:w-4/12 w-6/12 capitalize`}>
      <div className='flex items-center gap-2 py-3 pb-24'>
      <img src={logo}  alt='logo' className='max-w-xxsm'/>
      <h1 className='md:text-base text-xs'>Heretola stores</h1>
     <span onClick={props.close} className='cursor-pointer'>
     <p className='my-auto text-base font-semibold cursor-pointer'>X</p>
     </span>
    </div>

    <div>
      <span className='border-black border-b-2 pt-3 place-content-center flex items-center'>
        <IoIosHome />
        <h4 className='font-semibold'>Home</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <IoIosBeer />
        <h4 className='font-semibold'>Beverages</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <IoMdColorPalette />
        <h4 className='font-semibold'>Cosmetics</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <IoFastFood />
        <h4 className='font-semibold'>Food items</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <MdNoDrinks />
        <h4 className='font-semibold'>soft drinks</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <GiWineBottle />
        <h4 className='font-semibold'>liquors</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <GiClothes />
        <h4 className='font-semibold'>clothing</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <GiPearlNecklace />
        <h4 className='font-semibold'>Jewelries</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <GiSoap />
        <h4 className='font-semibold'>Detergent</h4>
      </span>
      <span className='border-black border-b-2 py-2 place-content-center flex items-center'>
        <FaToilet />
        <h4 className='font-semibold'>Toiletries</h4>
      </span>
    </div>

    <div className='mt-4'>
     <span className='flex items-center place-content-center'>
      <img className='max-w-xxxs' src={track} alt="track"/>
      <p className='font-semibold'>Track your order</p>
     </span>
     <span className='flex items-center place-content-center pt-2'>
      <img className='max-w-xxxs' src={cart} alt="cart"/>
      <p className='font-semibold text-sm'>Free Delivery & Refund</p>
     </span>
    </div>

    <Link to="/login" className='flex items-center place-content-center mt-12'>
      <IoLogOut className=' rotate-180'/>
      <p className='font-semibold'>Log out</p>
    </Link>
    </section>
  )
}
