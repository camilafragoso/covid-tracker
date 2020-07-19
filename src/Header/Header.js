import React from 'react';
import {Link} from "react-router-dom";
import '../Header/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="brand">
                <Link to="/" className="link">Covid Tracker</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" exact className="link">Brasil</Link>
                    </li>
                    <li>
                        <Link to="/estados" className="link">Estados</Link>
                    </li>
                    <li>
                        <Link to="/mundo" className="link">Mundo</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;