import React from 'react'
import { Outlet } from "react-router-dom";
import Homepage from '../../pages/Homepage';
import Navigation from '../Navigation/Navigation';
import "./Layout.css";

export default function Layout() {
  return (
    <div className='layout'>
        <Navigation />
        <Homepage />
        <Outlet />
    </div>
  )
}
