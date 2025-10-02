import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex w-auto justify-between h-16 items-center px-3 py-2 mx-7 my-2.5 rounded-xl bg-blend-saturation shadow-xl'>
      <div className='h-[100%] flex items-center'>
        <h1 className='font-2xl font-extrabold'>Shoppy Globe</h1>
      </div>

      <div className='flex justify-between gap-3.5 h-[100%]'>
        <ul className='flex gap-1.5'>
        <NavLink to={'/'}>  <li className='bg-blue-600 rounded-lg px-4 pt-1 pb-1 text-white font-medium cursor-pointer hover:bg-blue-700 h-[40px]'>
            Home
            </li></NavLink>
          <li className='bg-blue-600 rounded-lg px-4 pt-1 pb-1 text-white font-medium cursor-pointer hover:bg-blue-700 h-[40px]'>Shop</li>
          <li className='bg-blue-600 rounded-lg px-4 pt-1 pb-1 text-white font-medium cursor-pointer hover:bg-blue-700 h-[40px]'>Checkout</li>
        </ul>

        <div className='h-[100%] text-blue-600 hover:text-blue-700 px-4 pt-1 pb-1 flex items-center gap-1.5 cursor-pointer'>
          <FaShoppingCart size={22}/>
          <p className='font-medium text-gray-700 text-lg'>4</p>
        </div>
      </div>
    </div>
  )
}

export default Header