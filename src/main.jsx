import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart, ProductDetails, MainProduct, CheckoutPage, LandingPage } from './Component'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <LandingPage/>
      },
      {
        path:"/checkout",
        element: <CheckoutPage/>
      },
      {
        path:"/products",
        element:<MainProduct/>
      },
      {
        path:"/products/:productid",
        element:<ProductDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
