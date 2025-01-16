import React from 'react'
function toggleTheme() {
  document.body.classList.toggle('darkTheme');
  document.body.classList.toggle('lightTheme');
}
function Home() {
  return (
    <>

    <div className="bg-darkTheme-background text-darkTheme-primary p-4">
      <h1 className="text-darkTheme-primary">Dark theme primary</h1>
      <h2 className="text-darkTheme-secondary">Dark Theme secondary</h2>
      <p className="text-darkTheme-accent">This is some text using the dark theme palette.</p>
      <p className="text-darkTheme-secondary">This should be a <i className="text-darkTheme-accent">fact</i> by now</p>
    </div>
    </>
    
  )
}

export default Home