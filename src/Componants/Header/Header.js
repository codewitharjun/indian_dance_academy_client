import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="justify-content-center navbar">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/archivement">Achievement</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;