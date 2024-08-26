import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
  return (

      <div className='cards'>
          <h1>Check out these EPIC Destinations!</h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem 
                      src="images/img-9.jpg"
                      text="The hidden Waterfall inside Amazon"
                      label="Adventure"
                      path="/services"
                      />
                    <CardItem 
                      src="images/img-2.jpg"
                      text="Travel through the Island of Bali"
                      label="Luxury"
                      path="/services"
                      />
                    </ul>
                    <ul>
                    <br/>
                      <CardItem 
                      src="images/img-4.jpg"
                      text="Football on top of the Himilayan"
                      label="Adventure"
                      path="/products"
                      />
                    <CardItem 
                      src="images/img-8.png"
                      text="Camel tour on the Sahara Desert"
                      label="Adrenaline"
                      path="/sign-up"
                      />
                    <CardItem 
                      src="images/img-3.jpg"
                      text="Sail in the Atlantic Ocean"
                      label="Mystery"
                      path="/services"
                      />
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Cards;
