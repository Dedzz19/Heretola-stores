import React from 'react'
import map from './img/map.png'

export default function Location() {
  return (
    <div className='mx-auto place-content-center text-center py-5'>
      <h1 className='text-4xl font-semibold'>Pick your location</h1>
      <img src={map} alt='map' className=' lg:max-w-xl mx-auto'/>
      <section className='md:flex items-center text-xl font-semibold mt-12 ' >
       <div className='md:ml-auto mt-3'>
       <span className='flex gap-1 place-content-center md:place-content-start'><h3>State</h3><p className='text-red-500'>*</p></span>
        <input type='text' placeholder='pick your state' className='text-base bg-white py-2 px-4 rounded-full shadow-sp md:mr-24' />
       </div>
        <div className='md:mr-auto mt-3'>
        <span className='flex gap-1 ml-auto place-content-center md:place-content-start'><h3>LGA</h3><p className='text-red-500'>*</p></span>
        <input type='text' placeholder='pick your state' className='text-base bg-white py-2 px-4 rounded-full shadow-sp md:mr-auto' />
        </div>
      </section>
      <section className='md:flex items-center text-xl font-semibold md:mt-12 ' >
       <div className='md:ml-auto mt-3'>
       <span className='flex gap-1 place-content-center md:place-content-start '><h3>Nearest B/stop</h3><p className='text-red-500'>*</p></span>
        <input type='text' placeholder='pick your state' className='text-base bg-white py-2 px-4 rounded-full shadow-sp md:mr-24' />
       </div>
        <div className='mr-auto mt-3'>
        <span className='flex gap-1 md:ml-auto place-content-center md:place-content-start'><h3>House Address</h3><p className='text-red-500'>*</p></span>
        <input type='text' placeholder='pick your state' className='text-base bg-white py-2 px-4 rounded-full shadow-sp md:mr-auto' />
        </div>
      </section>
      <div className=' mx-auto text-center'>
      <button className='bg-primary text-white py-2 px-5 mt-5'>Place order</button>
      </div>
    </div>
  )
}
