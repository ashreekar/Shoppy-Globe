import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {
  let cartQunatity=useSelector(state=>state.cart.quantity);

  return (
    <div className='flex w-auto justify-between h-16 items-center px-3 py-2 mx-7 my-2.5 rounded-xl bg-white shadow-xl duration-300 backdrop-blur-filter backdrop-blur-xl backdrop-saturate-200 transition-shadow bg-opacity-90 bg-wash lg:pe-5 lg:ps-4 shadow-nav sticky top-0 z-50 '>
      <NavLink to={'/'}>
        <div className='h-[100%] flex items-center'>
          <img src="/logo.png" alt="Shoopy-globe" height={"30px"} width={"130px"} />
        </div>
      </NavLink>

      <div className='flex justify-between gap-4.5 h-[100%]'>
        <ul className='flex gap-2.5'>
          <NavLink to={'/'}>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer">Home</button>
          </NavLink>

          <NavLink to={"/products"}>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer">Shop</button>
          </NavLink>
          <NavLink to={"/checkout"}>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer">Checkout</button>
          </NavLink>
        </ul>

        <NavLink to={"/cart"}>
          <div className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer flex gap-1.5'>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
            </svg>

            <p className='text-md font-medium'>{cartQunatity}</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Header