import { useSelector } from 'react-redux'
import {CartItem} from "../index.js"
import { NavLink } from 'react-router-dom';

function Cart() {
  const cart=useSelector(state=>state.cart.cart);
  const cost=useSelector(state=>state.cart.cost);

  if(cart.length===0){
    return (
      <div className='h-[75vh] font-bold text-2xl text-gray-600 flex items-center justify-center'>
        <p>Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className='flex w-[100%] justify-evenly mt-7'>
      <div className='min-w-[45vw] flex flex-col gap-3 items-center'>
      {
        cart.map((item)=>{
          return (
            <CartItem product={item} key={item.id} />
          )
        })
      }
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <h4 className='font-bold text-xl'>Total: {cost.toFixed(2)}</h4>

          <NavLink to={'../checkout'}>
        <button className={`px-5 py-2 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer`}>Buy Now</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Cart