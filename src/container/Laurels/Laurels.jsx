import React from 'react';
import {SubHeading} from '../../components';
import {images, data} from '../../constants';
import './Laurels.css';

const AwardCard = (props) => {
  const {award} = props;
  return (
    <div className="app__laurels_awards-card">
      <img src={award.imgUrl} alt={award}/>
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{award.title}</p>
        <p className="p__cormorant"style={{fontSize: '1.2rem'}}>{award.subtitle}</p>
      </div>
    </div>
  )
}
const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">

      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {
            data.awards.map((award, index) => (
              <AwardCard key={index} award={award}/>
            ))
          }
        </div>
      </div>

      <div className="app__wrapper_img">
          <img src={images.laurels} alt="laurels_img" />
      </div>

    </div>
  )
}

export default Laurels