import {useState} from "react";
import {Outlet,Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => 
{
    let [hide,setHide] = useState(true);
    let toggleNav = () =>
    {
        setHide(!hide);
    }
    return (
        <>  
        <div className="nav">
            <div className="logo">
                <h3>Tourister</h3> 
                 <button className={hide ? "menu": "menu opened"} onClick={toggleNav} aria-label="Main Menu">
      <svg width="40" height="40" viewBox="0 0 100 80">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
            </div>
            <ul className={hide ? "navigations-links hide" : "navigations-links"}>
                <li>
                   <Link to="/"> Home </Link>
                </li>
                <li>
                   <Link to="/about"> About Us </Link>
                </li>
                <li>
                   <Link to="/singin"> Sing In </Link>
                </li>
                <li>
                   <Link to="/singup"> Sing Up </Link>
                </li>
            </ul>
            </div>
            <Outlet/>
        </>
        );
}
export default Navbar;