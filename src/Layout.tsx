import React from 'react'

import Nav from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { Outlet } from 'react-router'
import ThemeToggleButton from './Components/Utilities/ThemeToggleButton'



function Layout() {
  return (
      <div className="grid grid-cols-12 w-full m-0 min-h-screen">
        <div className="hidden md:block md:col-span-1">
          a
          {/* Insert dark light mode and some identification of my name */}
        </div>
        <div className="col-span-11 md:col-span-10">
          <main>
            <h1 className='text-center'>a</h1>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
        <header className="col-span-1 flex flex-col justify-between"> 
          <Nav />
          <ThemeToggleButton />
        </header>
      </div>
  )
}

export default Layout