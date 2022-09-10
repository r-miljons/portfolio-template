import { React, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import "./MobileNav.css"

export default function MobileNav({handleToggleMenu, toggleMenu}) {
    const nodeRef = useRef(null);

  return (
    <CSSTransition
        in={toggleMenu}
        nodeRef={nodeRef}
        unmountOnExit
        timeout={300}
        classNames="mobile-menu"
    >
    <div className="mobile-nav" ref={nodeRef}>
        <div className="close-css" onClick={handleToggleMenu}>
            <span className="left"></span>
            <span className="right"></span>
        </div>
        <div className='mobile-links'>
            <div className="nav-link mobile">
                <Link to='/' onClick={handleToggleMenu}>Home</Link>
            </div>
            <div className="nav-link mobile">
                <Link to='/portfolio' onClick={handleToggleMenu}>Portfolio</Link>
            </div>
            <div className="nav-link mobile">
                <Link to='/contact' onClick={handleToggleMenu}>Contact</Link>
            </div>
        </div>
    </div>
    </CSSTransition>
  )
}
