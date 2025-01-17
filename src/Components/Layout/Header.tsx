import CustomNavigate from '../Utilities/CustomNavigate'


function Nav() {
  return (

    <>
        <nav>
            <ul>
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
  )
}

export default Nav