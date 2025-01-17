import React from 'react'
import { NavLink } from 'react-router'

function Nav() {
  return (

    <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) =>
                     `
                    text-3xl md:text-2xl font-bold
                    ${isActive ? 
                        " text-light-accent dark:text-dark-accent" :
                        " text-light-primary dark:text-dark-primary"
                    }
                    hover:text-light-secondary dark:hover:text-dark-secondary
                    `
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({isActive}) =>
                    `
                    text-3xl md:text-2xl font-bold
                    ${isActive ? 
                        " text-light-accent dark:text-dark-accent" :
                        " text-light-primary dark:text-dark-primary"
                    }
                    hover:text-light-secondary dark:hover:text-dark-secondary
                    `
                    }>Projects</NavLink>
                </li>
                <li>
                <NavLink to="/about" className={({isActive}) =>
                    `
                    text-3xl md:text-2xl font-bold
                    ${isActive ? 
                        " text-light-accent dark:text-dark-accent" :
                        " text-light-primary dark:text-dark-primary"
                    }
                    hover:text-light-secondary dark:hover:text-dark-secondary
                    `
                    }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) =>
                    `
                    text-3xl md:text-2xl font-bold
                    ${isActive ? 
                        " text-light-accent dark:text-dark-accent" :
                        " text-light-primary dark:text-dark-primary"
                    }
                    hover:text-light-secondary dark:hover:text-dark-secondary
                    `
                    }>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav