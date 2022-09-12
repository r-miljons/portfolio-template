import { React, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
                <AnchorLink href='#home' onClick={handleToggleMenu}>Home</AnchorLink>
            </div>
            <div className="nav-link mobile">
                <AnchorLink href='#portfolio' onClick={handleToggleMenu}>Portfolio</AnchorLink>
            </div>
            <div className="nav-link mobile">
                <AnchorLink href='#contact' onClick={handleToggleMenu}>Contact</AnchorLink>
            </div>
        </div>
    </div>
    </CSSTransition>
  )
}
