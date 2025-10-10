import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { Cart, ProductDetails, MainProduct, CheckoutPage, LandingPage } from './Component'
import { Loading,LandingPage } from './Component/index.js'

const Cart=lazy(()=>import("./Component/Cart/Cart.jsx"));
const ProductDetails=lazy(()=>import("./Component/Products/ProductDetails.jsx"));
const MainProduct=lazy(()=>import("./Pages/Product/MainProduct.jsx"));
const CheckoutPage=lazy(()=>import("./Pages/Checkout/CheckoutPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    <RouterProvider router={router} />
  </StrictMode>,
)
