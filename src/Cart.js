import React, { useState } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import Checkout from './Checkout.jsx';
import toiletries from './img/tolietries.png'
import jewelry from './img/jewelry.png'
import cosmetics from './img/cosmetics.png'
import { useNavigate } from 'react-router-dom';
import mastercard from './img/MASTERCARD.png'
import verve from './img/Verve.png'
import visa from './img/VISA.png'
import processing from './img/process 1.png'

export default function Cart() {
  const datas=[
    {id:1 ,name:'Toiletries', img:toiletries},
    {id:2, name:'Cosmetics', img:cosmetics},
    {id:3, name:'Jewelry', img:jewelry}     
]
const[tasks,setTasks]=useState(datas)
 
  
const list= tasks.map((task) =>(
  <Checkout 
  name={task.name}
   img={task.img}
   key={task.id}
   id={task.id}
   deleteCheckout={deleteCheckout} />
))
function deleteCheckout(id){
  let returned=tasks.filter((task)=> id !== task.id );
  setTasks(returned)
}
  const Navigate=useNavigate()
  const[pagePosition, setPagePosition]=useState('static')
  const[opacity,setOpacity]=useState("opacity-100")
  const[display,setDisplay]=useState('hidden')

  function load(){
    setPagePosition('relative')
    setOpacity('opacity-30')
    setDisplay('absolute')
  }

  return (
    <>
      <div className={`${display} lg:bottom-40 lg:inset-x-36`}>
    <div className='bg-white rounded-3xl mx-auto py-12 px-12 mt-24 text-center shadow-2xl w-fit'>
      <img src={processing} alt="processing" className='animate-spin mx-auto' />
      <h1 className='text-6xl '>Payment Processing</h1>
    </div>
    </div>
    <div className={`md:grid grid-cols-cart grid-rows-1 ${opacity} ${pagePosition} `}>
    <div className='md:ml-20 ml-10  pt-3'>
      <span className='flex items-center cursor-pointer' onClick={() => Navigate(-1)} >
      <MdArrowBackIos className='text-xl font-bold'  />
      <p>Continue Shopping</p>
      </span>
      <h1 className='text-6xl'>Orders</h1>
      <ul>
        {list}
      </ul>
      <span className='flex'>
        <h1 className='md:mr-40 mr-12 md:text-2xl font-semibold'>Sub-total</h1>
        <h3 className='lg:ml-86 md:text-3xl font-bold'>$45,000.00</h3>
      </span>
    </div>
    <div className='bg-primary h-screen rounded-t-3xl lg:rounded-tl-3xl md:rounded-tr-none text-white py-40 '>
      <h3 className='text-4xl text-center mb-12'>Card Details</h3>
    <p className='ml-12 text-xl'>Select Card Type</p>
    <span className='flex items-center lg:ml-12 gap-3'>
    <img src={mastercard} alt='mastercard' className=' md:max-w-xxxs xl:max-w-none' />
    <img src={visa} alt='visa'className=' md:max-w-xxxs xl:max-w-none' />
    <img src={verve} alt='verve' className=' md:max-w-xxxs xl:max-w-none'/>
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
      <button onClick={load} className='text-2xl text-black px-10 py-2 bg-white font-semibold rounded-full'>Check out</button>
      </div>
    </div>
    </div>
    </>
    
  )
}
