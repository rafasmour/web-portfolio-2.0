import React from 'react'

import Nav from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { Outlet } from 'react-router'
import Features from './Components/Utilities/Features'


function Layout() {
  return (
      <div className="grid grid-cols-12 w-full m-0 min-h-screen bg-light-background dark:bg-dark-background">
        <div className="hidden md:flex md:flex-col md:col-span-1 items:start items-center">
          <Features />
        </div>
        <div className="col-span-11 md:col-span-10">
          <main className="p-5 min-h-lvh">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
        <header className="col-span-1 flex flex-col justify-between"> 
          <Nav />
          
        </header>
      </div>
  )
}

export default Layout