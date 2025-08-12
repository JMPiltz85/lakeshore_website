import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import "./Header.css"
import logo from "../images/lakeshore_logo.png"

export  default function Header(){

    const [isOpen, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header> 
            <div className="headerBar">
                <div className="headerTitle">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Lakeshore Co-op Logo" className='logo' />
                    </Link>
                </div>

                <div className="hamburgerWrapper">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
                </div>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li> <Link to="/" onClick={closeMenu}>Home</Link> </li>
                    <li> <Link to="/bylaws" onClick={closeMenu}>Bylaws</Link> </li>
                    <li> <Link to="/policies" onClick={closeMenu}>Policies</Link> </li>
                    <li> <Link to="/workorder" onClick={closeMenu}>Work Order</Link> </li>
                    <li> <Link to="/incidentreport" onClick={closeMenu}>Incident Report</Link> </li>
                    <li> <Link to="/unitsample" onClick={closeMenu}>Unit Sample</Link> </li>
                    <li> <Link to="/contact" onClick={closeMenu}>Contact Us</Link> </li>
                </ul>
            </nav>

        </header>


    )

}