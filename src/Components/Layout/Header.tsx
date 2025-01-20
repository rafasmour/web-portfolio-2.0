import CustomNavigate from '../Utilities/CustomNavigate'
import { ChangeEvent, useState } from "react";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMenuOpen(e.target.checked);
    };

    return (
        <>
            <nav>
                <input id="menu-toggle" name="menu-toggle" checked={menuOpen} type="checkbox" onChange={handleCheckboxChange} className="hidden" />
                <label htmlFor="menu-toggle" className="text-3xl cursor-pointer text-light-primary dark:text-dark-primary block text-center">&#9776;</label>
                <ul className={`absolute w-full min-h-full flex flex-col justify-center text-center gap-5 bg-light-background dark:bg-dark-background transition duration-300 ease-in-out top-0 left-0   ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <li>
                        <label htmlFor="menu-toggle" className="text-5xl md:text-5xl font-bold text-center cursor-pointer text-light-primary dark:text-dark-primary block md:absolute md:left-5 md:top-5">x</label>
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
                </ul>
            </nav>
        </>
    );
}

export default Nav;