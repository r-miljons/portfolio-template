import React from 'react'
import Slider from "react-slick";
import { PortableText } from '@portabletext/react';
import { useQuery, gql } from '@apollo/client';
import Spinner from '../Spinner/Spinner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css";

const SLIDESHOW_PICTURES = gql`
  query {
    allSlideshow {
      _id,
      title,
      descriptionRaw,
      image {
        asset {
          url
        }
      }
    }
  }
`

export default function Slideshow() {
  const { data, loading, error } = useQuery(SLIDESHOW_PICTURES);

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    if (error) return <p style={{textAlign: 'center'}}>Couldn't connect to server.</p>

  return (
    <div className="slideshow-container" id="portfolio">
      <Spinner loading={loading}/>
        <Slider {...settings}>
            {
              data && data.allSlideshow.map((item, index) => {
                return <div key={index}>
                  <div className="showcase-picture" 
                    style={{backgroundImage: `url(${item.image.asset.url})`}}
                    key={item._id}
                  >
                    <div className="dark-overlay">
                      <div className="picture-info">
                        <h1>{item.title}</h1>
                          <PortableText value={item.descriptionRaw}/>
                      </div>
                    </div>
                  </div>
                  </div>
            })
        }
        </Slider>
    </div>
  )
}