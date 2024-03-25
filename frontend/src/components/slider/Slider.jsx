import React, { useState } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
import "./Slider.scss";
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
        image: image8,
        heading: `Node.Js`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: image2,
        name: `Git`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: image6,
        name: `Vs Code`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: myPic,
        name: `Flutter`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: image7,
        name: `TailWind`,
        disc: `up to 30% of on all onsale products.`
    },
    
    {
        image: image1,
        heading: `Django`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: image9,
        heading: `Figma`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: image5,
        heading: `JavaScript`,
        disc: `up to 30% of on all onsale products.`
    },
   
    {
        image: image3,
        heading: `Html & CSS`,
        disc: `up to 30% of on all onsale products.`
    },
    {
        image: image4,
        heading: `C++`,
        disc: `up to 30% of on all onsale products.`
    }
]


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    const intervalTime = 5000;
    const navigate = useNavigate();
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () =>{};
    

  return <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {

        const {image, heading, disc} = slide;

        return (
            <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                {index === currentSlide && (<>
                    <img src={image} alt="slide" />
                    <div className="content">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <h2>{heading}</h2>
                        <p>{disc}</p>
                        <hr />
                        <button className="--btn --btn-primary" onClick={() => navigate("/shop")}>
                            Shop Now
                        </button>
                    </div>
                </>)}
            </div>
        )
      })}
    </div>
}

export default Slider
