import { IncreDecreCounter } from "../index.js"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addByOne,removeByOne,removeCompletly } from "../../stateUtils/cartSlice.js";

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

  const deleteOneCart = () => {
    if (quantity === 1) {
      dispatch(removeCompletly(product));
    } else {
      dispatch(removeByOne(product));
    }
  }
  return (
    <div className="rounded-md shadow-xl">
      <h3>{product.title}</h3>

      <div className='text-lg font-medium flex text-center flex-row items-center gap-4 mt-2'>
        <p className='text-gray-500 text-xl'>$ {product.price}</p>
        <p className='text-black text-medium'>
          To pay: {(product.cartQuantity * product.price).toFixed(2)}
          <span> for {product.cartQuantity} pieces</span>
          </p>
      </div>

      <IncreDecreCounter quantity={quantity} addOneCart={addOneCart} deleteOneCart={deleteOneCart} buyview={true} />
    </div>
  )
}

export default CartItem