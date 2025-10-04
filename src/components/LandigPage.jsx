import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function LandigPage() {
  const [timer,setTime]=useState(1);

  useEffect(()=>{
    setTimeout(()=>{
      setTime(timer==3?1:timer+1);
  },3000)
  },[timer])

  return (
   <div className='bg-white flex flex-col items-center mt-9'>

    <div className='flex flex-col gap-6 items-center text-center'>
      <h2 className='font-bold text-4xl text-blue-900'>Welcome to Shoppy Globe</h2>
      <p className='font-medium text-lg text-gray-600'>Shopping at home, Shopping in phone</p>
    </div>

    <div className='bg-blue-600 rounded-xl flex flex-col items-center p-10 mt-9 gap-3 mb-9'>
      <p className={`${timer==1?"visible":"hidden"} text-white font-bold text-2xl`}>Groceries</p>
      <p className={`${timer==2?"visible":"hidden"} text-white font-bold text-2xl`}>Electronics</p>
      <p className={`${timer==3?"visible":"hidden"} text-white font-bold text-2xl`}>Fashion</p>

      <p className='font-medium text-gray-300'>All at one place with few clicks</p>
    </div>

    <NavLink to={"/products"}>
      <button className="py-2.5 px-5 me-2 mb-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer shadow-2xl">Shop now</button>
    </NavLink>
    <NavLink>
      <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer shadow-2xl">View Cart</button>
    </NavLink>

   </div>
  )
}

export default LandigPage