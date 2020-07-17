import React from 'react';
import {Link} from "react-router-dom";
import '../Header/Header.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Brasil</Link>
                </li>
                <li>
                    <Link to="/posts">Estados</Link>
                </li>
                <li>
                    <Link to="/mundo">Internacional</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;