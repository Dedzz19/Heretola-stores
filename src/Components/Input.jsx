import React from 'react'

export default function Input(props) {
  return (
    <div>
      <h1 className='text-start font-bold text-sm mt-8 mb-2 pl-16 lg:pl-0 lg:ps-0'>{props.name}</h1>
      <input type="text" name="" id="" className='outline-none rounded-3xl shadow-sp  p-2 px-4 lg:w-3/5 w-4/5' placeholder={props.placeholder} />
    </div>
  )
}
