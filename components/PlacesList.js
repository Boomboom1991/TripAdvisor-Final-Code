// components/PlacesList.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PlacesList = ({ places }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {places.map((place) => (
        <div key={place.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
          <h3>{place.name ? place.name : 'Без названия'}</h3>
          <p>{place.city}</p>
          <p>{place.subcategory}</p>
          {place.images.length > 0 ? (
            <Slider {...settings}>
              {place.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </div>
              ))}
            </Slider>
          ) : (
            <p>Нет доступных изображений</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlacesList;
