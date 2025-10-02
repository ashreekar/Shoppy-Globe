import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {LandigPage} from './components'

const router=createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children:[
      {
        element:<LandigPage/>,
        path:""
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
