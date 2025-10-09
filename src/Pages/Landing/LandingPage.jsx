import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function LandigPage() {
  const [timedBannerValue, settimedBannerValue] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      settimedBannerValue(timedBannerValue === 3 ? 1 : timedBannerValue + 1);
    }, 3000);

    return () => clearTimeout(interval);
  }, [timedBannerValue]);

  const categoryMap = {
    1: 'Groceries',
    2: 'Electronics',
    3: 'Fashion'
  };

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
        <div className='bg-blue-600 rounded-3xl flex flex-col items-center py-4 px-10 mt-2 gap-3 shadow-xl w-full max-w-xs md:max-w-sm transform hover:scale-[1.03] transition duration-300'>

          <div className='h-10 relative w-full flex justify-center items-center'>
            {[1, 2, 3].map(t => (
              <p
                key={t}
                className={`absolute text-white font-black text-3xl 
                    transition duration-500 ease-in-out 
                    ${timedBannerValue === t
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-90 translate-y-full'}`
                }
              >
                {categoryMap[t]}
              </p>
            ))}
          </div>

          <p className='font-medium text-blue-200 text-base'>All at one place with a few clicks.</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 items-center mt-4'>

          <NavLink to={"/products"}>
            <button
              className="cursor-pointer py-3 px-8 text-lg font-bold text-white bg-blue-600 rounded-full 
                           hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 
                           transition duration-200 shadow-xl transform hover:scale-[1.05] active:scale-[0.98] flex flex-col items-center"
            >
              Start Shopping Now <FaArrowRight/>
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
    </div>
  )
}

export default LandigPage