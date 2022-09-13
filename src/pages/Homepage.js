import React from 'react'
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Contact from './Contact';
import Portfolio from './Portfolio';

export default function Homepage() {

  return (
    <div className="homepage-container" id='home'>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
