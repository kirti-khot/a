import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header id="main">
                <h4>Vivekanand College</h4>    

            
                <nav>
                    
                    <Link to="/" id="main2">Home</Link>
                    <Link to="/aboutpage" id="main2">About</Link>
                    <Link to="/coursespage" id="main2">Courses</Link>
                    <Link to="/contactpage" id="main2">Contact</Link>
                    <Link to="/admissionpage" id="main1"><b>Apply Now!</b></Link>
                 </nav>
            </header>
    
        </div>
    )
}
export default Header;
    