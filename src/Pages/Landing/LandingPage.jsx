import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Discounted from './Featured/Discounted';
import TopRated from './Featured/TopRated';
import { useFetch } from "../../utils/useFetch.js"

function LandigPage() {
  const { data, error, loading } = useFetch("http://localhost:3000/products");

  return (
    <div className='min-h-screen flex flex-col items-center p-4 relative'>

      <div className='relative z-10 flex flex-col gap-8 items-center text-center max-w-4xl w-full'>

        <div className='flex flex-col gap-2 items-center text-center'>
          <h2 className='font-extrabold text-4xl md:text-5xl text-gray-900 leading-tight'>
            Welcome to <span className='text-blue-600'>Shoppy Globe</span>
          </h2>
          <p className='font-light text-xl text-gray-600 tracking-wide max-w-md'>
            Shopping at home, shopping in your phone. Get everything you need, instantly.
          </p>
        </div>

      </div>

      <div className={loading || error ? 'hidden' : 'flex flex-col mt-7'}>
        <Discounted data={data} />
        <TopRated data={data} />
      </div>

       <div className='flex flex-col sm:flex-row gap-4 items-center mt-12'>

          <NavLink to={"/products"}>
            <button
              className="cursor-pointer py-3 px-8 text-lg font-bold text-white bg-blue-600 rounded-full 
                           hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 
                           transition duration-200 shadow-xl transform hover:scale-[1.05] active:scale-[0.98] flex flex-col items-center"
            >
              Start Shopping Now <FaArrowRight />
            </button>
          </NavLink>
          <NavLink to={"/cart"}>
            <button
              className="cursor-pointer py-2.5 px-6 text-sm font-medium text-gray-700 bg-white rounded-full 
                           border border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-gray-200 
                           transition duration-200 shadow-md"
            >
              View Cart
            </button>
          </NavLink>
        </div>
    </div>
  )
}

export default LandigPage