import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className='layout'>
        <Navigation />
        <Outlet />
    </div>
  )
}
