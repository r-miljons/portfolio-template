import { React, useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import MobileNav from '../MobileNav/MobileNav';
import menu from "../../assets/menu.svg"
import "./Navigation.css";

export default function Navigation() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    if (!toggleMenu) {
        setToggleMenu(true);
    } else {
        setToggleMenu(false);
    }
  }

  return (
    <nav>
        <h2 onClick={() => navigate('/')}>Place Holder</h2>
        <div className='nav-links'>
            <div className="nav-link">
                <Link to='/'>Home</Link>
            </div>
            <div className="nav-link">
                <Link to='/portfolio'>Portfolio</Link>
            </div>
            <div className="nav-link">
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
        <img className="menu-icon" src={menu} onClick={handleToggleMenu}/>
            <MobileNav handleToggleMenu={handleToggleMenu} toggleMenu={toggleMenu}/>
    </nav>
  )
}
