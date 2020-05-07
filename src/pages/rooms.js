import React from 'react';
import './rooms.css';
import {Link} from 'react-router-dom';
import Banner from './../components/banner';


function RoomsPage(){
  return (
    <div className="roompage">
    <div className="roomlanding">
    <Banner title="Our rooms">
     <Link to="/" className="room-link">Home</Link>
     </Banner>
    </div>
    </div>
  )
}

export default RoomsPage;
