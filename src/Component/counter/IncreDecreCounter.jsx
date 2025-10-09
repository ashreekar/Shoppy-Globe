import { FaPlus, FaMinus, } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function IncreDecreCounter({ quantity, deleteOneCart, addOneCart,view }) {
  return (
    <div className={`flex items-center w-auto justify-evenly gap-2 py-2.5 px-5 me-2 mb-2 mt-1 ${quantity === 0 ? "hidden" : "flex"} ${view?"flex-col":""}`}>
      <NavLink to={'../checkout'}>
        <button className={`px-3 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer py-1`}>Buy Now</button>
      </NavLink>
      <button
        onClick={deleteOneCart}
        className="px-2 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-full"
      >
        <FaMinus />
      </button>

      <input
        type="number"
        disabled
        value={quantity}
        className="w-10 text-center border-2 border-blue-500 font-medium text-blue-600 bg-white rounded-md"
      />

      <button
        onClick={addOneCart}
        className="px-2 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-full"
      >
        <FaPlus />
      </button>
    </div>
  )
}

export default IncreDecreCounter