import React,{Component} from 'react';
import './singleroom.css';
import defaultImg from '../img/room3.jpg';
import {Link} from 'react-router-dom';
import Banner from './../components/banner';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component{
  constructor(props){
    super(props);
    //console.log(this.props);
    this.state = {
      slug:this.props.match.params.slug,
      defaultImg
    };
  }
  static contextType = RoomContext;
  render () {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
      return(
      <div className="error">
      <h3>No Such Room Could Be Found</h3>
      <Link to="/rooms">Back To Rooms</Link>
      </div>
    );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images} = room;
  return (
    <div className="singleroompage">
    <div className="singleroomlanding">
    <Banner title={`${name} room`}>
     <Link to="/" className="room-link">Rooms</Link>
     </Banner>
    </div>
    <section className="single-room">
    <div className="single-room-images">
    {images.map((image,index)=>{
    return  <img key={index} src={image} alt={name} />
    })}
    </div>
    <div className="single-room-info">
    <article className="desc">
    <h3>Details</h3>
    <p>{description}</p>
    </article>
    <article className="info">
    <h3>Info</h3>
    <h4>Price : ${price}</h4>
    <h4>Size : {size} SQFT</h4>
    <h4>
    max capacity : {
      capacity > 1 ?`${capacity} people`: `${capacity} person`
    }
    </h4>
    <h4>
    {pets? "Pets allowed" : "No pets allowed"}
    </h4>
    <h4>{breakfast && "Free Breakfast included"}</h4>
    </article>
    </div>
    </section>
    <section className="room-extras">
    <h4>Extras</h4>
    <ul>
    {extras.map((item,index)=>{
      return <li key={index}>{item}</li>
    })}
    </ul>
    </section>
    </div>
  )
}
}
