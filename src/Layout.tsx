import Nav from './Components/Layout/Header'
import { Outlet } from 'react-router'
import Features from './Components/Utilities/Features'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './Components/Layout/Footer'
import BackgroundParticlesVertical from './Components/Utilities/BackgroundParticlesVertical'

const Layout: React.FC = () => {
  return (
    <ThemeProvider>
        <BackgroundParticlesVertical />
        <div className="grid max-sm:grid-rows-20 sm:grid-cols-12 w-full max-sm:p-2  m-0 min-h-screen bg-gradient-to-b from-light-accent dark:from-dark-accent via-light-background dark:via-dark-background via-[percentage:20%_95%] to-light-accent dark:to-dark-accent z-10">
          <div className="hidden md:flex md:flex-col md:col-span-1 items:start items-center p-2 z-10">
            <Features />
          </div>
          <div className="max-sm:row-start-2 max-sm:row-span-19  sm:col-span-11 md:col-span-10 z-10">
            <main className="w-full md:w-[80%] mx-auto min-h-[80%] z-10">
              <Outlet />
            </main>
            <Footer />
          </div>
          <header className="max-sm:row-start-1 max-sm:row-span-1  sm:col-span-1 z-10 "> 
            <Nav />
          </header>
        </div>
    </ThemeProvider>
  )
}

export default Layout