import './navigation.css';
import logo from '../pictures/logo.png';
import cart from '../pictures/cart.png';
import { NavLink, Link } from 'react-router-dom';


import * as React from 'react';

export default function Navigation(props) {
    return (
        <nav className="nav-container">
            <ul className='nav--links'>
                <li className='nav--link-item'>
                    <img className="logo" alt="logo" src={logo} />
                </li>
                <li className='nav--link-item'>
                    <NavLink to="/procurement" className='button'><strong>Procurement</strong></NavLink>
                </li>
                <li className='nav--link-item'>
                    <NavLink to="/orders" className='button'><strong>Pickups / Deliveries</strong></NavLink>
                </li>
                {/* <li className='nav--link-item'>
                    <NavLink to="/account" className='button'>My&nbsp;Account</NavLink>
                </li> */}
                <li className='nav--link-item'>
                    <span>Your Balance</span>
                    <div className="balance"><strong>3400</strong> PLAS</div>
                </li>
                <li className='nav--link-item'>
                    <Link to="/checkout">
                      <img className="cart" alt="cart" src={cart} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}