import React from "react";
import Slider from "react-slick";
import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1050, // если ширина <= 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 600, // если ширина <= 600px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};
const ReplicasArts = ({ arts, country, putToCart }) => {
  const artsList = arts.map((art, index) => {
    if (art.country === country)
      return (
        <li className='replicas-arts__item' key={art.name}>
          <div className='replicas-arts__img'>
            <img src={art.image} alt={`Изображение картины: ${art.name}`} />
          </div>
          <div className='replicas-arts__info'>
            <p className='replicas-arts__author'>{art.author}</p>
            <h3 className='replicas-arts__name'>{art.name}</h3>
            <p className='replicas-arts__type'>{art.type}</p>
            <p className='replicas-arts__price'>{art.price}</p>
          </div>
          <Button
            classModifiers='button--square'
            onClick={putToCart}
            value={art.name}>
            В корзину
          </Button>
        </li>
      );
  });
  return (

    <Slider {...settings}>
      {artsList}
    </Slider>

  );
};

export default ReplicasArts;