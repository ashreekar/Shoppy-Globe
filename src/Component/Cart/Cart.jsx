import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from "../index.js"
import { NavLink } from 'react-router-dom';
import { emptyCart } from '../../stateUtils/cartSlice.js';
import { useEffect, useState } from 'react';

function Cart() {
  const dispatch = useDispatch();
  const cartFetched = useSelector(state => state.cart.cart);
  const cost = useSelector(state => state.cart.cost);

  const [cart, setCart] = useState(cartFetched);

  useEffect(() => {
    setCart(cartFetched);
  }, [cartFetched, cost])

  const removeCart = () => {
    dispatch(emptyCart(product));
  }

  if (cart.length === 0) {
    return (
      <div className='h-[75vh] font-bold text-2xl text-gray-600 flex items-center justify-center'>
        <p>Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-row w-full justify-evenly gap-8 mt-10 px-4'>
      <div className='flex flex-col gap-6 items-center w-full lg:min-w-[55vw] bg-white rounded-2xl shadow-md p-4 border border-gray-100'>
        {
          cart.map((item) => {
            return (
              <CartItem product={item} key={item.id} />
            )
          })
        }
      </div>
      <div className="flex flex-col items-start gap-6 bg-white rounded-2xl shadow-md p-6 h-fit border border-gray-100 w-full lg:w-[25vw]">
        <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3 w-full">
          Order Summary
        </h3>

        <div className="flex justify-between w-full text-lg font-medium text-gray-700">
          <span>Total:</span>
          <span className="text-black font-semibold">${cost.toFixed(2)}</span>
        </div>

        <div className="flex flex-col w-full gap-3">
          <button
            onClick={removeCart}
            className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-200 shadow-sm cursor-pointer"
          >
            Clear Cart
          </button>

          <NavLink to="../checkout" className="w-full">
            <button
              className="cursor-pointer w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200 shadow-sm"
            >
              Buy Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Cart