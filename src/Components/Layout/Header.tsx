import CustomNavigate from '../Utilities/CustomNavigate'
import { ChangeEvent, useState } from "react";
import ThemeToggleButton from '../Utilities/ThemeToggleButton';
import BackgroundParticleHorizontal from '../Utilities/BackgroundParticlesHorizontal';

const Nav: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMenuOpen(e.target.checked);
    };
    const resumeLink: string = import.meta.env.VITE_LINK_TO_RESUME;
    return (
        <>
            <nav>
                <input id="menu-toggle" name="menu-toggle" checked={menuOpen} type="checkbox" onChange={handleCheckboxChange} className="hidden" />

                <label htmlFor="menu-toggle" className="mr-3 sm:mr-0 text-5xl cursor-pointer text-light-primary dark:text-dark-primary fixed text-center">&#9776;</label>
                <ul className={`fixed overflow-hidden w-full min-h-screen flex flex-col justify-center text-center gap-10 transition-opacity duration-300 ease-in-out top-0 left-0 bg-gradient-to-r from-light-accent dark:from-dark-accent via-light-background dark:via-dark-background via-[percentage:15%_85%] to-light-accent dark:to-dark-accent ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <li>
                        <label htmlFor="menu-toggle" className="text-5xl md:text-5xl font-bold text-center cursor-pointer text-light-primary dark:text-dark-primary absolute right-5 top-5">x</label>
                    </li>
                    <li>
                        <BackgroundParticleHorizontal />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/web-portfolio-2.0/" context="Home" />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/web-portfolio-2.0/portfolio" context="Portfolio" />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to={resumeLink} context="About" />
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <CustomNavigate to="/web-portfolio-2.0/contact" context="Contact" />
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