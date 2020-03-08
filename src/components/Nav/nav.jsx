import React from 'react';
import './nav.css'
function Nav() {
    return (
        <div  >
            <ul className="nav justify-content-center navbar navbar-dark" id="home">
                <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                
                 
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact me
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Nav;