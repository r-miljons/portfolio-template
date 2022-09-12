import React from 'react'
import Contact from '../../pages/Contact';
import Homepage from '../../pages/Homepage';
import Portfolio from '../../pages/Portfolio';
import Navigation from '../Navigation/Navigation';
import "./Layout.css";

export default function Layout() {
  return (
    <div className='layout'>
        <Navigation />
        <Homepage/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}
