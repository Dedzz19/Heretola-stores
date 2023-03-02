import React, { useState } from 'react'
import Input from './Components/Input'
import "./Components/styles.css"
import { FcGoogle } from "react-icons/fc";
import Cart from './img/Cart1 2.png'
import { Link } from 'react-router-dom';


export default function Sign() {
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
    <section className='lg:grid grid-cols-2 grid-rows-1 h-screen '>
        <div className='bg-primary w-auto lg:h-screen lg:pl-20 lg:pt-24 flex gap-3 items-center lg:block'>
         <img src={Cart}  alt="A cart" className='image flex-initial md:max-w-none md:mb-12 max-w-xxs
           '/>
          <h1 className=' text-white font-extrabold text-base md:text-4xl'>SHOP QUALITY <br /> AND ENJOY YOUR <br/> ORDER </h1>
        </div>
        <div className='lg:mt-20 mt-10 text-center lg:ml-28 lg:text-start' >
          <h1 className=' lg:text-4xl text-2xl'>Open your account</h1>
          <Input name='Full name' placeholder='your name'/>
          <Input name='Email Address' placeholder='example@email.com' />
          <span>
           <Input name='Password' placeholder='Enter password'/>
          </span>
          <div className=''>
            <Link to='/Dashboard'>
            <button onClick={() => {time(); changeBtn1();}} className={`' mt-16 lg:w-3/5 w-4/5 bg-primary font-semibold ${btn} text-white p-2 rounded-2xl '`}>Create your account</button>
            </Link>
            <div className=' flex gap-3 py-8 items-center mx-auto lg:mx-20'>
              <hr className='border-black w-20 border-1 ml-auto lg:ml-0' />
              <p className='font-extrabold'>OR</p>
              <hr className='border-black w-20 border-1 mr-auto' />
            </div>
            <span onClick={() => {time2(); changeBtn2();}} className={`${btn2} flex bg-white rounded-2xl place-content-center items-center mx-auto lg:mx-0 lg:w-3/5 w-4/5 `}>
           <FcGoogle className=' text-2xl'/>
            <button className=' font-semibold text-base p-2 rounded-2xl'>Sign in with Google</button>
            </span>
            <div className=' w-10/12'>
            <h5 className='mt-2 text-center'>By signing in, you agree to our communications and usage terms <br /> Already have an account? 
            <Link to='/' className='text-blue-500'>Sign in</Link>
            </h5>
           </div>
          </div>

        </div>
    </section>
  )
}
