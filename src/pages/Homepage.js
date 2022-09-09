import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
  const navigate = useNavigate();
  const landingPicture = require("../assets/landing-page.jpg");

  return (
    <div className='homepage-container' style={{backgroundImage: `url(${landingPicture})`}}>
        <div className='landing-text'>
            <h1>
                This place is so held by this placeholder text!
            </h1>
            <button className='main-button' onClick={() => navigate('/portfolio')}>See Portfolio</button>
        </div>
    </div>
  )
}
