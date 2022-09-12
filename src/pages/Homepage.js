import React from 'react'
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';

export default function Homepage() {

  return (
    <div className="homepage-container" id='home'>
      <Hero/>
      <About/>
    </div>
  )
}
