import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import Banner from './../components/banner';
import Service from './../components/service';


function HomePage(){
  return (
    <div className="homepage">
    <div className="homelanding">
    <Banner title="Magnificient rooms"
    subtitle="Magnificient rooms starting at $250">
     <Link to="/rooms" className="room-link">Our rooms</Link>
     </Banner>
    </div>
    <Service />
    </div>
  )
}

export default HomePage;
