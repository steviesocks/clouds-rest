import React from 'react';
import { Link } from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/original.svg';
import Logo from '../../assets/clouds-rest-logo.png';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            {/* <Logo className='logo' /> */}
            <img alt='' src={Logo} style={{width: 60}}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;