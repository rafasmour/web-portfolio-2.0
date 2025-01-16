import React from 'react'
function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('lightTheme');
}
function Home() {
  return (
    <>

    <div className="bg-dark-background text-dark-primary p-4">
      <h1 className="text-dark-primary">Dark theme primary</h1>
      <h2 className="text-dark-secondary">Dark Theme secondary</h2>
      <p className="text-dark-accent">This is some text using the dark theme palette.</p>
      <p className="text-dark-secondary">This should be a <i className="text-dark-accent">fact</i> by now</p>
    </div>
    </>
    
  )
}

export default Home