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
                    ${isActive ? 
                        "" :
                        ""
                    }
                    `
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({isActive}) =>
                    `
                    ${isActive ? 
                        "" :
                        ""
                    }
                    `
                    }>projects</NavLink>
                </li>
                <li>
                <NavLink to="/about" className={({isActive}) =>
                    `
                    ${isActive ? 
                        "" :
                        ""
                    }
                    `
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) =>
                    `
                    ${isActive ? 
                        "" :
                        ""
                    }
                    `
                    }>contact</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav