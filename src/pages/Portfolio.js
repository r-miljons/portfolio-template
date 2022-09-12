import React from 'react'
import Gallery from '../components/Gallery/Gallery';
import Slideshow from '../components/Slideshow/Slideshow';

export default function Portfolio() {
  return (
    <div className='portfolio-container' >
      <h2 className='section-name'>Portfolio</h2>
      <Slideshow/>
      <h2 className='section-name'>Gallery</h2>
      <Gallery/>
    </div>
  )
}