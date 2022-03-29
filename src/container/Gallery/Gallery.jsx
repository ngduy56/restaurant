import React, { useRef } from 'react';
import './Gallery.css';
import { BsInstagram, BsArrowLeftShort, BSArrowRightShort, BsArrowRightShort } from 'react-icons/bs';
import {images, data} from '../../constants';
import {SubHeading} from '../../components';

const Gallery = () => {
  const scrollRef = useRef();
  const imagesGallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
  const scroll = (direction) => {
    if(direction === 'left'){
      scrollRef.current.scrollLeft -= 310;
    }
    else {
      scrollRef.current.scrollLeft += 310;
    }
  };
  return (
    <div className="app__gallery flex__center">

      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:'#AAA', marginTop:'2rem'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">View more</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagesGallery.map((item, index) => (
              <div key={index} className="app__gallery-images_card flex__center">
                <img src={item} alt="gallery_img" />
                <BsInstagram className="gallery__image-icon" />
              </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort 
            className="gallery__arrow-icon" 
            onClick={()=> scroll('left')} 
          />
          <BsArrowRightShort 
            className="gallery__arrow-icon" 
            onClick={()=> scroll('right')} 
          />
        </div>
      </div>

    </div>
  )
}

export default Gallery