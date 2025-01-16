import React from 'react'

const ThemeToggleButton = () => {
    return (
      <>
        <label htmlFor="check" className='relative inline-flex items-center cursor-pointer'>
            <input type="checkbox" id="check" className="sr-only  peer" />
            <div className="w-11 h-6 bg-light-background peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dark-accent dark:peer-focus:"></div>
            <span className='w-2/5 h-4/5 bg-light-background fixed rounded-full peer-checked:bg-dark-background peer-checked:left-11'></span>
        </label>
      </>
    );
  };

export default ThemeToggleButton