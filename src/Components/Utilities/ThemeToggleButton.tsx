import React from 'react'
import { useTheme } from '../../context/ThemeContext';
const ThemeToggleButton: React.FC = () => {
  const {dark, toggleTheme} = useTheme();
    return (
      <>
        <label htmlFor="toggleTheme" className="mx-auto w-16 min-h-8  flex px-2 py-1 cursor-pointer rounded-full overflow-hidden border-2 border-light-secondary dark:border-dark-secondary bg-light-accent dark:bg-dark-accent " onClick={() => toggleTheme()}>
          <input type="checkbox" name="" id="" checked={dark} className="sr-only peer" readOnly />
          <span className="  bg-light-secondary dark:bg-dark-secondary rounded-full w-6 h-6 peer-checked:translate-x-full  transition ease"></span>  
        </label>
      </>
    );  
};

export default ThemeToggleButton