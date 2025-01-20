import React from 'react'
import Title from '../Context/Title'
import ThemeToggleButton from './ThemeToggleButton'

const Features: React.FC = () => {
  return (
    <>
        <Title context="Features" /><br />
        <ThemeToggleButton/>
    </>
  )
}

export default Features