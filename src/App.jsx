import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './Component'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App