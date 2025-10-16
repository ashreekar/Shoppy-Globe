import IncreDecreCounter from "../counter/IncreDecreCounter.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addByOne, removeByOne, removeCompletly } from "../../stateUtils/cartSlice.js";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const item = useSelector(state => state.cart.cart);

  useEffect(() => {
    const val = item.find((val) => {
      return val.id === product.id;
    })

    setQuantity(val?.cartQuantity || 0);
  }, [product, item])

  const addOneCart = () => {
    dispatch(addByOne(product));
  }

  const removeProduct = () => {
    dispatch(removeCompletly(product));
  }

  const deleteOneCart = () => {
    if (quantity === 1) {
      dispatch(removeCompletly(product));
    } else {
      dispatch(removeByOne(product));
    }
  }
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 w-full max-w-3xl mx-auto border border-gray-100">
      <div className='w-full md:w-1/3 items-center flex justify-center'>
        <img src={product.thumbnail} alt={product.title} onError={(e) => {
          e.target.src = "/logo.png"
        }} className='h-40 w-40 object-contain rounded-xl bg-gray-50 p-2 border border-gray-100' loading="lazy" />
      </div>
      <div className="flex flex-col flex-1 justify-between w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h3>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray-700'>
          <p className='text-lg text-gray-500 font-medium'>Price:<span className="text-gray-900 font-semibold">$ {product.actualPrice}</span></p>
          <p className='text-lg'>
            <span className="text-black font-bold">To pay: {(product.cartQuantity * product.actualPrice).toFixed(2)}</span>
            {" "}
            <span className="text-sm text-gray-500 ml-1"> for {product.cartQuantity} pieces</span>
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">

          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-sm transition-colors duration-200 cursor-pointer" onClick={removeProduct}>Remove</button>

          <IncreDecreCounter quantity={quantity} addOneCart={addOneCart} deleteOneCart={deleteOneCart} buyview={true} />
        </div>
      </div>
    </div>
  )
}

export default CartItem