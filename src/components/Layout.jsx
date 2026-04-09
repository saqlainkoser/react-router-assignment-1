//Navbar
//dynamic component -> outlet

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h1>Product Page</h1>
      <nav>
        <Link  to="/products/elec">Electronics</Link>
        <Link  to="/products/clg">Clothing</Link>
         <Link  to="/products/mob">Mobiles</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
