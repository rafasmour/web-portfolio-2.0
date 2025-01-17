import React, { useEffect } from 'react'
const ThemeToggleButton: React.FC = () => {
  const systemDefaultTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = React.useState(systemDefaultTheme);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    useEffect(() => {
      if(systemDefaultTheme)
        darkModeHandler();
    }, []);
    return (
      <>
        <label htmlFor="toggleTheme" className=" w-5 h-9 flex p-1 cursor-pointer rounded-full overflow-hidden border-2 border-light-secondary dark:border-dark-secondary bg-white-accent dark:bg-dark-accent " onClick={() => darkModeHandler()}>
          <input type="checkbox" name="" id="" checked={dark} className="sr-only peer" readOnly />
          <span className="  bg-light-secondary dark:bg-dark-secondary rounded-full w-3 h-3 peer-checked:translate-y-full transition ease"></span>  
        </label>
      </>
    );  
};

export default ThemeToggleButton