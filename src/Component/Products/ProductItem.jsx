import { useDispatch, useSelector } from "react-redux"
import IncreDecreCounter from "../counter/IncreDecreCounter"
import { NavLink } from "react-router-dom";
import { addFirst, removeCompletly, removeByOne, addByOne } from "../../stateUtils/cartSlice";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductItem({ product }) {
  // state for managing induvidual state of product quantity
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const item = useSelector(state => state.cart.cart);
  // subscribed to cart to fetch cart details

  // IncreDecreCounter can call for addFirstProduct, addOne, DeleteOne

  // matchign the product in cart form to prop to get the product quantity
  useEffect(() => {
    const val = item.find((val) => {
      return val._id === product._id;
    })

    setQuantity(val?.cartQuantity || 0);
  }, [product, item])

  // adding first product
  const addFirstProductCart = () => {
    dispatch(addFirst(product));
  }

  // adding one by one to cart
  const addOneCart = () => {
    dispatch(addByOne(product));
  }

  //deleing on by one from cart
  const deleteOneCart = () => {
    if (quantity === 1) {
      dispatch(removeCompletly(product));
    } else {
      dispatch(removeByOne(product));
    }
  }

  return (
    <div className='flex flex-col h-100 w-[75vw] sm:w-[40vw] lg:w-[25vw] rounded-xl border-2 shadow-md border-white hover:border-blue-500 transition duration-150 items-center'>
      <NavLink to={`../products/${product.id}`} className="w-[100%] flex flex-col items-center h-80">
        <div className='h-[50%] w-[90%] flex justify-center'>
          {/* <img src={product.thumbnail} alt={product.title} onError={(e) => {
            e.target.src = "/logo.png"
          }} className='h-full w-auto object-fit rounded-t-xl' loading="lazy" /> */}
          <LazyLoadImage
            alt={product.title}
            className='h-full w-auto object-fit rounded-t-xl'
            src={product.thumbnail}
            onError={(e) => {
              e.target.src = "/logo.png"
            }} />
        </div>
        <div className='flex flex-col items-center gap-1.5'>
          <h3 className='text-2xl font-bold text-center'>{product.title}</h3>
          <div className={`${product.rating >= 4 ? "bg-green-600" : product.rating >= 3 ? "bg-orange-500" : "bg-red-500"} flex items-center gap-1 px-2 py-1 rounded-sm w-fit`}>
            <FaStar className="text-white text-xs" />
            <span className="text-white text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        {/* Showing the discounted rate also */}
        <div className='text-lg font-medium flex text-center flex-row items-center justify-between gap-4 mt-2'>
          <p className='text-black text-xl'>₹ {(product.price * (1 - (product.discountPercentage / 100))).toFixed(2)}</p>
          <p className='text-gray-500 line-through text-medium'>{(Number(product.price)).toFixed(2)}</p>
        </div>
      </NavLink>
      <div className='flex justify-between'>
        <button className={`px-5 me-2 mb-2 mt-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer py-2.5 focus:ring-1 focus:ring-blue-200 ${quantity === 0 ? "block" : "hidden"}`} onClick={addFirstProductCart}>Add to cart</button>

        <IncreDecreCounter quantity={quantity} addOneCart={addOneCart} deleteOneCart={deleteOneCart} />
      </div>
    </div>
  )
}

export default ProductItem