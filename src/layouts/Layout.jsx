import React from 'react'
import Routers from '../router/Routers'
import Navbar from '../components/Navbar'



const Layout = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Routers/>
      </main>
    </>
  )
}

export default Layout
