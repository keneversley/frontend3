
import React from "react";
import HeroImage from "../Shared/HeroImage";
import kiki from "../Assets/kiki";
import Kikicard from "./Kikicard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Adjust path as necessary
import Marion from "./Marion";
import marion from "../Assets/Marion";
import SeaSpiceCard from "./SeaSpiceCard";
import seaspice from "../Assets/SeasSpice";
import baga from "../Assets/Bagattelle";
import BagattelleCard from "./BagattelleCard";






const Resturant = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <HeroImage Image="https://globalasset1.s3.us-east-2.amazonaws.com/banner_restaurants.jpg" />

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Kiki on the river</p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/kikilogo.png" alt="" className="kiki-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Kiki on the River" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {kiki.map((kikiItem) => (
              <Kikicard key={kikiItem.id} kiki={kikiItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Marion</p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/Marionlogo.png" alt="" className="marion-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Marion" className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {marion.map((marionItem) => (
              <Marion key={marionItem.id} marion={marionItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Seaspice</p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/seaspicelogo.png" alt="" className="seaspice-header-image" />
          <h1 className="center-bold">Miami Florida</h1>
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for SeaSpice Miami " className="reserve-button">
            Reserve
          </a>
        </div>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {seaspice.map((seaspiceItem) => (
              <SeaSpiceCard key={seaspiceItem.id} seaspice={seaspiceItem} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Bagattelle</p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/bagalogo.png" alt="baga Logo" className="baga-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Bagattelle Miami" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">South Beach</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {baga.map((item) => (
              <BagattelleCard key={item.id} baga={item} />
            ))}
          </Slider>
        </div>
      </div>





    </div>
  );
};

export default Resturant;

