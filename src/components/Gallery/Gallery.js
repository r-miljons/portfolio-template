import React, { useState } from 'react';
import { Gallery as PhotoswipeGallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css';
import "./Gallery.css"
import SmallSpinner from "../Spinner/SmallSpinner";
import { useQuery, gql } from '@apollo/client';
// image url builder to make thumbnails for gallery
import { urlFor } from '../../utilities/imgUrlBuilder';

const PICTURES = gql`
    query {
        allGallery {
        _id,
        description,
        image {
            asset {
            url,
            metadata {
                dimensions {
                width,
                height
                }
            }
            }
        }
        }
    }
`

export default function Gallery() {
    const { data, loading, error } = useQuery(PICTURES);
    const [morePictures, setMorePictures] = useState(false);

    const tileStyles = {
        boxShadow: "0 5px 10px 2px rgba(0, 0, 0, 0.2)",
        transition: "all 500ms ease",
        cursor: "pointer",
        borderRadius: "3px",
    }

    function handleMouseEnter(e) {
        e.target.style.transform = 'scale(1.02)';
    }
    function handleMouseLeave(e) {
        e.target.style.transform = '';
    }
    function handleMorePictures() {
      if (morePictures) {
        setMorePictures(false);
      } else {
        setMorePictures(true);
      }
    }

    if (loading) return <SmallSpinner/>
    if (error) return <p style={{textAlign: 'center'}}>Couldn't connect to server.</p>

    let pictures = data.allGallery;

    // display first 6 pictures by default
    if (!morePictures) {
      pictures = data.allGallery.filter((e, index) => index < 6);
    } else {
      pictures = data.allGallery
    }


  return (
    <>
    <div className='gallery-container'>
    <PhotoswipeGallery withCaption>
        {
            pictures.map(item => {
                const width = item.image.asset.metadata.dimensions.width;
                const height = item.image.asset.metadata.dimensions.height;
                // change the size of thumbnails
                let thumbnailHeight = 400;
                if (height > width) { thumbnailHeight *= 1.5 };

                return <Item
                key={item._id}
                original={item.image.asset.url}
                thumbnail={urlFor(item.image.asset.url).height(thumbnailHeight).url()}
                width={width}
                height={height}
                caption={item.description}
              >
                {({ ref, open }) => (
                  <img 
                    ref={ref} 
                    onClick={open}
                    src={urlFor(item.image.asset.url).height(thumbnailHeight).url()} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    style={tileStyles}
                    className={width > height ? 'wide' : "tall"}
                  />
                )}
              </Item>
            })
        }
    </PhotoswipeGallery>
    </div>
    { data.allGallery.length > 6 && <p className='show-more' onClick={handleMorePictures}>{morePictures? "Show Less" : "Show More"}</p> }
    </>
  )
}