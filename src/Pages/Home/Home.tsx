import React from 'react'
import Title from '../../Components/Context/Title';
import Paragraph from '../../Components/Context/Paragraph';
function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('lightTheme');
}
function Home() {
  const test: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, iure?";
  return (
    <>
    <Title context="Welcome to my Page!"/>
    <Paragraph context={test} />
    </>
    
  )
}

export default Home