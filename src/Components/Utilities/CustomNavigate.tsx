import React from 'react'
import { NavLink } from 'react-router'

const CustomNavigate: React.FC<{to: string, context: string}> = ({to, context}) => {
  return (
    <NavLink to={to} className={({isActive}) =>
        `
       text-5xl md:text-5xl font-bold text-center
       ${isActive ? 
           " text-light-accent dark:text-dark-accent" :
           " text-light-primary dark:text-dark-primary"
       }
       hover:text-light-secondary dark:hover:text-dark-secondary
       `
       }>{context}</NavLink>
  )
}

export default CustomNavigate