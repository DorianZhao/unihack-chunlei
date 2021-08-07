import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './header.styles.scss';

const Header = () => (
    <div className= 'header'>
        <div className = 'options'>
            <Link  to = '/login'>
            <Button className = 'option'>
                <p>登录</p>
             </Button>
            </Link>
        </div>
    </div>
)

export default Header;
