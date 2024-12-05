

import React from 'react';
import './Hero.css';



const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div>
          <p>Villas</p>
          <p>Mansions</p>
          <p>& Penthouses</p>
        </div>
      </div>
      <div className='hero-right'>
        <img src= "https://globalasset1.s3.us-east-2.amazonaws.com/hero_image.png" alt="" />
      </div>
      
    </div>
  );
}

export default Hero;
