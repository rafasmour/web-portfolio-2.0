import CustomNavigate from '../Utilities/CustomNavigate'
import { ChangeEvent, useState } from "react";
import ThemeToggleButton from '../Utilities/ThemeToggleButton';
import BackgroundParticles from '../Utilities/BackgroundParticles';

const Nav: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMenuOpen(e.target.checked);
    };
    
    return (
        <>
            <nav>
                <input id="menu-toggle" name="menu-toggle" checked={menuOpen} type="checkbox" onChange={handleCheckboxChange} className="hidden" />

                <label htmlFor="menu-toggle" className="text-5xl cursor-pointer text-light-primary dark:text-dark-primary fixed text-center">&#9776;</label>
                <ul className={`fixed overflow-hidden w-full min-h-screen flex flex-col justify-center text-center gap-10 transition-opacity duration-300 ease-in-out top-0 left-0 bg-gradient-to-r from-light-accent dark:from-dark-accent via-light-background dark:via-dark-background via-[percentage:15%_85%] to-light-accent dark:to-dark-accent ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <li>
                        <label htmlFor="menu-toggle" className="text-5xl md:text-5xl font-bold text-center cursor-pointer text-light-primary dark:text-dark-primary absolute left-5 top-5">x</label>
                    </li>
                    <li>
                        <BackgroundParticles />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/" context="Home" />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/projects" context="Projects" />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/about" context="About" />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/contact" context="Contact" />
                    </li>
                    <li>
                        <ThemeToggleButton />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;