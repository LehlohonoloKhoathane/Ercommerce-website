import React from 'react'
import Slider from '../../components/slider/Slider'
import './Home.scss'
import HomeInfoBox from './HomeInfoBox';
import { productData } from '../../components/carousel/data';
import { CarouselItem} from "../../components/carousel/CarouselItem"
import Carousel from 'react-multi-carousel';
import ProductCarousel from '../../components/carousel/Carousel';


const PageHeading = ({heading, btnText}) => {
  return (
    <>
      <div className='--flex-between'>
        <h2 className='--fw-thin'>{heading}</h2>
        <button className='--btn'>{btnText}</button>
      </div>
      <div className='--hr'></div>
    </>
  )
};

const Home = () => {
  const productss = productData.map((item, index) => (
    <div key={item.id}>
      <CarouselItem 
      name={item.name}
      url={item.imageurl}
      pricre={item.price}
      description={item.description}/>
    </div>
  ))

  return (
    <>
      <Slider/>
      <section>
        <div className='container'>
          <HomeInfoBox/>
          <PageHeading heading={"Latest Products"} btnText={"Shop Now!!!"}/>
          <ProductCarousel products={productss}/>
        </div>
      </section>
    </>
  )
};

export default Home
