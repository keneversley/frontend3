
import React from "react";
import "../Shared/HeroImage.css";
import HeroImage from "../Shared/HeroImage";
import vendome from "../Assets/Vendome"; // Ensure this import is correct
import VendomeCard from "./VendomeCard"; // Ensure correct import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import Slider from 'react-slick';
import hydebeach from '../Assets/HydeBeach';
import HydeBeachCard from './HydeBeachCard';
import mrjones from "../Assets/MrJones";
import MrJonesCard from "./MrJonesCard";
import EllevenCard from "./EllevenCard";
import elleven from "../Assets/elleven";
import LivCard from "./LivCard";
import liv from '../Assets/Liv';
import strawberry from '../Assets/Strawberry';
import StrawberryCard from "./StrawberryCard";






const NightLife = () => {
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
    <div className="my-4">
      <HeroImage Image="https://globalasset1.s3.us-east-2.amazonaws.com/banlifener_night.jpg" />
      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Vendome</p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/vendomelogo.png" alt="Vendome Logo" className="vendome-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Vendome" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">South Beach</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {vendome.map((item) => (
              <VendomeCard key={item.id} vendome={item} />
            ))}
          </Slider>
        </div>
      </div>
        
      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Hyde Beach</p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/hydebeachlogo.png" alt="HydeBeach Logo" className="hydebeach-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Hyde Beach" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">South Beach</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {hydebeach.map((item) => (
              <HydeBeachCard key={item.id} hydebeach={item} />
            ))}
          </Slider>
        </div>
      </div>

         
      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Mr Jones </p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/mrjoneslogo.png" alt="mrjones Logo" className="mrjones-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Mr Jones" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">South Beach</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {mrjones.map((item) => (
              <MrJonesCard key={item.id} mrjones={item} />
            ))}
          </Slider>
        </div>
      </div>

           
      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">E11even Miami  </p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/ellevenlogo.png" alt="elleven Logo" className="elleven-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Elleven Miami" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">Miami FL</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {elleven.map((item) => (
              <EllevenCard key={item.id} elleven={item} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">LIV </p>
          <img src= "https://globalasset1.s3.us-east-2.amazonaws.com/livlogo.png" alt="liv Logo" className="liv-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Liv Miami" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">South Beach</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {liv.map((item) => (
              <LivCard key={item.id} liv={item} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Strawberry Moon  </p>
          <img src="https://globalasset1.s3.us-east-2.amazonaws.com/strawberrylogo.png" alt="liv Logo" className="strawberry-header-image" />
          <div className="reserve-container">
          <a href="mailto:reservation@example.com?subject=Reservation Request for Strawberry Moon Miami" className="reserve-button">
            Reserve
          </a>
        </div>
          <h1 className="center-bold">South Beach</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {strawberry.map((item) => (
              <StrawberryCard key={item.id} strawberry={item} />
            ))}
          </Slider>
        </div>
      </div>

     


    </div>
  );
};

export default NightLife;
