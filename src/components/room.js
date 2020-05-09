import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../img/room1.jpg';
import PropTypes from 'prop-types';

export default function Room({ room })  {
  const{name,slug,images,price} = room;
  return (
    <article className="room">
     <div className="img-container">
     <img src={images[0] || defaultImg} alt="Single room" />
     <div className="price-top">
     <h3>${price}</h3>
     <p>per night</p>
     </div>
     <Link to={`/singleroom/${slug}`} className="btn-primary">
     Feature
     </Link>
     </div>
     <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
  })
}
