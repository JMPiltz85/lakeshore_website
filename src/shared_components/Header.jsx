import { Link } from 'react-router-dom';
import "./Header.css"
import logo from "../images/lakeshore_logo.png"

export  default function Header(){


    return (
        <header> 
            <div className="headerTitle"> 
                <Link to="/"> 
                    <img src={logo} alt="Lakeshoe Co-op Logo" className='logo' />
                </Link>  
            </div>

            <nav className="nav">
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/bylaws">Bylaws</Link> </li>
                    <li> <Link to="/policies">Policies</Link> </li>
                    <li> <Link to="/workorder">Work Order</Link> </li>
                    <li> <Link to="/incidentreport">Incident Report</Link> </li>
                    <li> <Link to="/unitsample">Unit Sample</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                </ul>
            </nav>

        </header>


    )

}