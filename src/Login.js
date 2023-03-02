import React, { useState } from 'react'
import Input from './Components/Input'
import "./Components/styles.css"
import { FcGoogle } from "react-icons/fc";
import Cart from './img/Cart1 2.png'
import { Link } from 'react-router-dom';
export default function Login(props) {
  const [btn, setBtn]=useState('shadow-sp')
  const [btn2, setBtn2]=useState('shadow-sp')
  function changeBtn1(){
    setBtn('shadow-none')
    }
    function changeBtn2(){
      setBtn2('shadow-none')
      }
    function time(){
      setTimeout(()=> setBtn('shadow-sp'),)
    }

    function time2(){
      setTimeout(()=> setBtn2('shadow-sp'),)
    }
     
     
  
 
  return (
    <section className='lg:grid grid-cols-2 grid-rows-1 h-screen gap-x-24'>
        <div className='bg-primary w-auto lg:h-screen lg:pl-20 lg:pt-24 flex gap-3 items-center lg:block'>
         <img src={Cart}  alt="A cart" className='image flex-initial md:max-w-none md:mb-12 max-w-xxs
           '/>
          <h1 className=' text-white font-extrabold text-base md:text-4xl'>SHOP QUALITY <br /> AND ENJOY YOUR <br/> ORDER </h1>
        </div>
        <div className=' lg:mt-48 mt-10 text-center lg:text-start'>
          <h1 className=' font-extrabold lg:text-4xl text-3xl'>LOG IN</h1>
          <Input name='Email Address' placeholder='example@email.com'/>
          <span>
          <Input name='Password' placeholder='Enter password' />
          </span>
          <div className=''>
            <Link to='/Dashboard'>
            <button onClick={() => {time(); changeBtn1();}} className={`' mt-16 w-3/5 bg-primary font-semibold ${btn} text-white p-2 rounded-2xl '`}>Sign In</button>
            </Link>
            <div className=' flex gap-3 py-8 items-center mx-auto lg:mx-20'>
              <hr className='border-black w-20 border-1 ml-auto lg:ml-0' />
              <p className='font-extrabold'>OR</p>
              <hr className='border-black w-20 border-1 mr-auto' />
            </div>
            <span onClick={() => {time2(); changeBtn2();}} className={`${btn2} flex bg-white w-max rounded-2xl lg:px-3 items-center lg:ml-20 mx-auto`}>
           <FcGoogle className=' text-2xl'/>
            <button className=' font-semibold text-base p-2 rounded-2xl'>Sign in with Google</button>
            </span>
          </div>
        </div>
    </section>
  )
}
