import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Thankyou() {
  const navigate = useNavigate();

  return (
    <div className='thankyou-container'>
        <div className='thankyou-message'>
            <h1>Thank You!</h1>
            <p>Your message has been sent and I will get back to you as soon as possible.</p>
            <button className='main-button' onClick={() => navigate("/")}>Close</button>
        </div>
    </div>
  )
}
