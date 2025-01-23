import React from 'react'
import SubTitle from '../Blocks/SubTitle'

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
    <div className="flex flex-row justify-around p-4">
        <div className="flex flex-col justify-between">
           <SubTitle context="Contact"/>
           <ul className="list-none">
              <li></li>
              <li></li>
              <li></li>
           </ul>
        </div>
        <div></div>
    </div>
      <h2 className='text-center text-light-primary dark:text-dark-primary text-sm md:text-base'>&copy; Rafail Mourouzidis 2025</h2>
    </footer>
  )
}

export default Footer