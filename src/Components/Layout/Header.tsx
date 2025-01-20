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
                <label htmlFor="menu-toggle" className="text-2xl cursor-pointer text-light-primary dark:text-dark-primary block">&#9776;</label>
                <ul className={`absolute w-40 min-h-full flex flex-col gap-5 bg-light-background dark:bg-dark-background translate-x-full  ${menuOpen ? 'block' : 'hidden'}`}>
                    <li>
                        <label htmlFor="menu-toggle" className="text-2xl cursor-pointer text-light-primary dark:text-dark-primary block">x</label>
                    </li>
                    <li>
                        <CustomNavigate to="/" context="Home" />
                    </li>
                    <li>
                        <CustomNavigate to="/projects" context="Projects" />
                    </li>
                    <li>
                        <CustomNavigate to="/about" context="About" />
                    </li>
                    <li>
                        <CustomNavigate to="/contact" context="Contact" />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;