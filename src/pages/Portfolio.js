import React from 'react'
import portfolioImg from "../assets/portfolio.jpg"
import arrowBack from "../assets/arrow-back.svg";
import arrowForward from "../assets/arrow-forward.svg";


export default function Portfolio() {
  return (
    <div className='portfolio-container'>
      <div className="showcase-container" style={{backgroundImage: `url(${portfolioImg})`}}>
        <div className="dark-overlay">
          <div className="picture-info">
            <h1>Placed this holder</h1>
            <p>This holder was placed here to make it in place.</p>
          </div>
          <div className="portfolio-nav">
            <div className="previous"><img src={arrowBack}/></div>
            <div className="next"><img src={arrowForward}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
