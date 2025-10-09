import { useDispatch,useSelector } from "react-redux"
import IncreDecreCounter from "../counter/IncreDecreCounter"
import { NavLink } from "react-router-dom";
import { addFirst, removeCompletly, removeByOne, addByOne } from "../../stateUtils/cartSlice";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function ProductItem({ product }) {
  const [quantity,setQuantity]=useState(0);

  const dispatch = useDispatch();
  const item=useSelector(state=>state.cart.cart);

  // IncreDecreCounter can call for addFirstProduct, addOne, DeleteOne

  useEffect(()=>{
    const val=item.find((val)=>{
      return val.id === product.id;
    })

    if(val){
      setQuantity(val?.cartQuantity || 0);
    }
  },[product])

  const addFirstProductCart = () => {
    useDispatch(addFirst(item));
  }

  return (
    <div className='flex flex-col h-100 w-[75vw] sm:w-[40vw] lg:w-[25vw] rounded-xl border-2 shadow-md border-white hover:border-blue-500 transition duration-150 items-center'>
      <NavLink to={`../products/${product.id}`} className="w-[100%] flex flex-col items-center h-80">
        <div className='h-[50%] w-[90%] flex justify-center'>
          <img src={product.thumbnail} alt={product.title} className='h-full w-auto object-fit rounded-t-xl' />
        </div>
        <div className='flex flex-col items-center gap-1.5'>
          <h3 className='text-2xl font-bold text-center'>{product.title}</h3>
          <div className={`${product.rating >= 4 ? "bg-green-600" : product.rating >= 3 ? "bg-orange-500" : "bg-red-500"} flex items-center gap-1 px-2 py-1 rounded-sm w-fit`}>
            <FaStar className="text-white text-xs" />
            <span className="text-white text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        <div className='text-lg font-medium flex text-center flex-row items-center justify-between gap-4 mt-2'>
          <p className='text-black text-xl'>$ {product.price}</p>
          <p className='text-gray-500 line-through text-medium'>{(product.discountPercentage + product.price).toFixed(2)}</p>
        </div>
      </NavLink>
      <div className='flex justify-between'>
        <button className={`px-5 me-2 mb-2 mt-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer py-2.5 focus:ring-1 focus:ring-blue-200"} ${quantity === 0 ? "block" : "hidden"}`} onClick={addFirstProductCart}>Add to cart</button>

        <IncreDecreCounter quantity={quantity} />
      </div>
    </div>
  )
}

export default ProductItem