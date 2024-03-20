import React from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import myPic from "../../assets/images/iphone-removebg-preview.png";
import image1 from "../../assets/images/jackets-removebg-preview.png";
import image2 from "../../assets/images/ladiescoats-removebg-preview.png";
import image3 from "../../assets/images/noke_hoodie-removebg-preview.png";
import image4 from "../../assets/images/perfume-removebg-preview.png";
import image5 from "../../assets/images/smart_watch-removebg-preview.png";
import image6 from "../../assets/images/suit-removebg-preview.png";
import image7 from "../../assets/images/sweater-removebg-preview.png";
import image8 from "../../assets/images/underArmourCap-removebg-preview.png";
import image9 from "../../assets/images/watch-removebg-preview.png";

const sliderData = [
    {
        img: image8,
        heading: `Node.Js`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: image2,
        name: `Git`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: image6,
        name: `Vs Code`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: myPic,
        name: `Flutter`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: image7,
        name: `TailWind`,
        disc: `up to 30% of on all onsale products.`
    },
    
    {
        img: image1,
        name: `Django`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: image9,
        name: `Figma`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: image5,
        name: `JavaScript`,
        disc: `up to 30% of on all onsale products.`
    },
   
    {
        img: image3,
        name: `Html & CSS`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        img: image4,
        name: `C++`,
        disc: `up to 30% of on all onsale products.`
    }
]


const Slider = () => {

    const prevSlide = () =>{};
    const nextSlide = () =>{};

  return <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {

        const {image, heading, disc} = slide;
      })}
    </div>
}

export default Slider
