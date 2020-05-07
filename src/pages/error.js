import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import Banner from './../components/banner';

function ErrorPage(){
  return (
    <div className="homepage">
    <div className="homelanding">
    <Banner title="404"
    subtitle="PAGE NOT FOUND">
     <Link to="/" className="room-link">Home</Link>
     </Banner>
    </div>
    </div>
  )
}

export default ErrorPage;
