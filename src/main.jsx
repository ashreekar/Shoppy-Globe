import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Loading from "./Component/LoadAndError/Loading.jsx"
import LandingPage from "./Pages/Landing/LandingPage.jsx"
// Imported all the component that needs to be downloaded directly

// Lazy loading is done for dynamic routing dependent components
const Cart=lazy(()=>import("./Component/Cart/Cart.jsx"));
const ProductDetails=lazy(()=>import("./Component/Products/ProductDetails.jsx"));
const MainProduct=lazy(()=>import("./Pages/Product/MainProduct.jsx"));
const CheckoutPage=lazy(()=>import("./Pages/Checkout/CheckoutPage.jsx"));
import NotFound from './Component/404/NotFound.jsx'

// created router using '/' form home and for chekcout, products, cart etc
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/checkout",
        element:<Suspense fallback={<Loading/>}> <CheckoutPage /></Suspense>
      },
      {
        path: "/products",
        element:<Suspense fallback={<Loading/>}> <MainProduct /></Suspense>
      },
      {
        path: "/products/:productid",
        element:<Suspense fallback={<Loading/>}> <ProductDetails /></Suspense>
      },
      {
        path: "/cart",
        element:<Suspense fallback={<Loading/>}> <Cart /></Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* router provider will help in adding routers to Routers */}
    <RouterProvider router={router} />
  </StrictMode>,
)
