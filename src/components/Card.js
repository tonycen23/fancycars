import React from 'react';
import { availabilityTypes } from '../utils/availabilityTypes';
import '../stylesheets/card.css';

export const Card = ({ car }) => {
  let availabilityElement = undefined;
  if (car.available === availabilityTypes.available) {
    availabilityElement = <button className="availability--btn">Buy</button>
  } else if (car.available === availabilityTypes.outOfStock) {
    availabilityElement = <span className="out-of-stock">{car.available}</span>
  } else {
    availabilityElement = <span>{car.available}</span>
  }

  return (
    <div className="card">
      <div className="car-image-container">
        <img  src={car.img} alt={`fancy cars #${car.id}`} className="car--image"/>
      </div>
      <div className="card-body">
        <div className="car-title">
          <h5>{ car.name }</h5>
          <div className="availability">{ availabilityElement }</div>
        </div>
        <div className="clearfix"></div>
        <div className="car-stats">
          <span>Make: { car.make }</span>
          <span>Model: { car.model }</span>
          <span>Year: { car.year }</span>
        </div>
        <div className="clearfix"></div>
        <div className="availability-mobile">{ availabilityElement }</div>
      </div>
    </div>
  );
}
