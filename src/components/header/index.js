import React from 'react';
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './header.css';

function Header(){
    return (
        <div>
            <nav>
                <Link to="/" >
                    <FaHome size={24} />
                </ Link>
                <Link to="/login">
                    <FaUserAlt size={24} />
                </ Link>

                <Link to="/sau">
                    <FaSignInAlt size={24} />
                </ Link>
            </nav>
        </div>
    );
}

export default Header;