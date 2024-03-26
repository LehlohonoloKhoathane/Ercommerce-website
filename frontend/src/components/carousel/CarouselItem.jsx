import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ url, name, price, description }) => {
  return (
    <div className='carouselItem'>
      <Link to="/product-details">
        <img className='product--image' src={url} alt="products" />
        <p className="price">
            {`$${price}`}
        </p>
        <h4>{name}</h4>
        <p className="--mb">{description}</p>
      </Link>
      <button className='--btn --btn-primary'> Add to Cart</button>
    </div>
  )
}

export default CarouselItem
