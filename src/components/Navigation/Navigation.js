import { React, useState } from 'react';
import { useQuery, gql } from '@apollo/client'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileNav from '../MobileNav/MobileNav';
import menu from "../../assets/menu.svg"
import "./Navigation.css";

const PAGE_TITLE = gql`
query {
	allSiteSettings {
    title
  }
}
`

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { data, loading, error } = useQuery(PAGE_TITLE);

  function handleToggleMenu() {
    if (!toggleMenu) {
        setToggleMenu(true);
    } else {
        setToggleMenu(false);
    }
  }



  return (
    <nav>
        <h2>{data && data.allSiteSettings[0].title}</h2>
        <div className='nav-links'>
            <div className="nav-link">
                <AnchorLink href='#home'>Home</AnchorLink>
            </div>
            <div className="nav-link">
              <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
            </div>
            <div className="nav-link">
              <AnchorLink href='#contact'>Contact</AnchorLink>
            </div>
        </div>
        <img className="menu-icon" src={menu} onClick={handleToggleMenu}/>
            <MobileNav handleToggleMenu={handleToggleMenu} toggleMenu={toggleMenu}/>
    </nav>
  )
}
