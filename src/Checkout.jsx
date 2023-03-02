import React, { useState } from 'react'
import "./Components/styles.css"
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";

export default function Checkout(props) {
  const[quantity, setQuantity]=useState(1)
  function add(){
    setQuantity(quantity+1)
  }
  function remove(){
    setQuantity(quantity-1)
  }

  return (
    <section className='flex gap-3 my-2'>
      <div className='grid grid-cols-3 py-1 sm:gap-12 w-240 bg-white shadow-sp  items-center gap-3 grid-row-1'>
      <img src={props.img} alt={props.name} className='shadow sm:max-w-xs' />
      <span>
        <h4 className='text-2xl font-bold'>{props.name}</h4>
        <span className='md:flex items-center gap-3 py-2'>
        <p className='md:text-base text-sm font-black'>Order ID:</p>
        <p className='md:text-base text-sm '>2211567RRTI</p>
        </span>
        <p>$25,000</p>
      </span>
      <span >
        <h4 className=' md:mt-0'>Quantity</h4>
        <span className='flex items-center md:mt-0 text-xl cursor-pointer'>
        <IoIosRemove onClick={remove}  className='text-white rounded-full text-2xl bg-primary ' />
          <h1 className='mx-3'>{quantity}</h1>
         <IoIosAdd onClick={add} className='text-white rounded-full text-2xl bg-primary ' />
        </span>
      </span>
    </div>
      <p onClick={()=> {props.deleteCheckout(props.id)}} className='my-auto text-base py-1 px-3 rounded-full bg-gray-400 font-semibold cursor-pointer'>X</p>
    </section>
  )
}
