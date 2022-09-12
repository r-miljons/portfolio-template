import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PortableText } from '@portabletext/react';
import SmallSpinner from '../Spinner/SmallSpinner'
import "./About.css"

const ABOUT_PAGE = gql`
query {
	allAbout {
    title,
    descriptionRaw,
    picture {
      asset {
        url
      }
    }
  }
}
`

export default function About() {
  const { data, loading, error } = useQuery(ABOUT_PAGE);

  if (loading) return <SmallSpinner/>
  if (error) return <p style={{textAlign: 'center'}}>Couldn't connect to server.</p>

  const aboutData = data.allAbout[0];

  return (
    <section className="about-section">
        <div className="about-container">
            <div className="about-picture" style={{backgroundImage: `url(${aboutData.picture.asset.url})`}}></div>
            <div className="about-text">
                <p className='section-name white'>About</p>
                <h2>{aboutData.title}</h2>
                <PortableText value={aboutData.descriptionRaw}/>
            </div>
        </div>
    </section>
  )
}
