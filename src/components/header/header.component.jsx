import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className= 'header'>
        <div className = 'options'>
            <Link className = 'option' to = '/feed'>
                Login
            </Link>
        </div>

    </div>
)

export default Header;