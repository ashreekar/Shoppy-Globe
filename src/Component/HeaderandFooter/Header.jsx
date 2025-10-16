import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  let cartQunatity = useSelector(state => state.cart.quantity);
  // subscribed to cart to display cart quantity overall
  // have states to managemge current page and to toggle hamburger menu
  const [currentPage, setCurrentPage] = useState("cart");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // used to handle button indication
  useEffect(() => {
    if (location.pathname.includes("/products")) {
      setCurrentPage("products");
    } else if (location.pathname.includes("/checkout")) {
      setCurrentPage("checkout");
    } else if (location.pathname.includes("/cart")) {
      setCurrentPage("cart");
    } else {
      setCurrentPage("home");
    }
  }, [location.pathname]);

  return (
    // manu for large and medium screens
    <div className='flex w-auto justify-between h-16 items-center px-3 py-2 mx-7 my-2.5 rounded-xl bg-white shadow-xl duration-300 backdrop-blur-filter backdrop-blur-xl backdrop-saturate-200 transition-shadow bg-opacity-90 bg-wash lg:pe-5 lg:ps-4 shadow-nav sticky top-0 z-50 '>
      <NavLink to={'/'}>
        <div className='h-[100%] flex items-center' onClick={() => setIsMenuOpen(false)} id='menu'>
          <img src="/logo.png" alt="Shoopy-globe" height={"30px"} width={"130px"} />
        </div>
      </NavLink>

      <div className='justify-between gap-4.5 h-[100%] hidden md:flex'>
        <ul className='flex gap-2.5'>
          <NavLink to={'/'}>
            <button type="button" className={currentPage === "home" ? "py-2.5 px-5 me-2 mb-2 text-sm text-white focus:outline-none bg-blue-700 rounded-full border border-blue-200 hover:bg-blue-600 font-bold focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer" : "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer"}>Home</button>
          </NavLink>

          <NavLink to={"/products"}>
            <button type="button" className={currentPage === "products" ? "py-2.5 px-5 me-2 mb-2 text-sm text-white focus:outline-none bg-blue-700 rounded-full border border-blue-200 hover:bg-blue-600 font-bold focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer" : "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer"}>Shop</button>
          </NavLink>
          <NavLink to={"/checkout"}>
            <button type="button" className={currentPage === "checkout" ? "py-2.5 px-5 me-2 mb-2 text-sm text-white focus:outline-none bg-blue-700 rounded-full border border-blue-200 hover:bg-blue-600 font-bold focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer" : "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 cursor-pointer"}>Checkout</button>
          </NavLink>
        </ul>

        <NavLink to={"/cart"}>
          <div className={currentPage === "cart" ? 'py-2.5 px-5 me-2 mb-2 text-sm text-white focus:outline-none bg-blue-600 rounded-full border border-blue-200 hover:bg-blue-500 font-bold focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer flex gap-1.5' : 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer flex gap-1.5'}>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
            </svg>
            <p className='text-md font-medium'>{cartQunatity}</p>
          </div>
        </NavLink>
      </div>

      <button
        className="md:hidden p-2 cursor-pointer"
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* This is a dynamic menu for small screen devices of hamburger menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 md:hidden">
          <NavLink to={'/'} onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Home</NavLink>
          <NavLink to={'/products'} onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Shop</NavLink>
          <NavLink to={'/checkout'} onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Checkout</NavLink>
          <NavLink to={'/cart'} onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Cart ({cartQunatity})</NavLink>
        </div>
      )}
    </div>
  )
}

export default Header