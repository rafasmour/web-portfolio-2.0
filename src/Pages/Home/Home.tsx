import React from 'react'
import Title from '../../Components/Blocks/Title';
import Paragraph from '../../Components/Blocks/Paragraph';
const Home: React.FC = () => {
  const test: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, iure?";
  return (
    <>
    <Title context="Welcome to my Page!"/>
    <Paragraph context={test} />
    </>
    
  )
}

export default Home