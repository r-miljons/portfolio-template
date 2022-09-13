import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useQuery, gql } from '@apollo/client'
import SmallSpinner from '../Spinner/SmallSpinner'
import "./Hero.css"

const HERO_PAGE = gql`
query {
	allPageHero {
    landingText,
    picture {
      asset {
        url
      }
    }
  }
}
`

export default function Hero() {
  const { data, loading, error } = useQuery(HERO_PAGE);

  if (loading) return <SmallSpinner/>
  if (error) return <p style={{textAlign: 'center'}}>Couldn't connect to server.</p>

  const heroData = data.allPageHero[0];

  return (
    <div className='hero-container'>
      <div className='hero-image' style={{backgroundImage: `url(${heroData.picture.asset.url})`}}></div>
        <div className='landing-text'>
            <h1>{heroData.landingText}</h1>
            <AnchorLink href='#portfolio' style={{textDecoration: 'none'}}><button className='main-button'>See Portfolio</button></AnchorLink>
        </div>
    </div>
  )
}
