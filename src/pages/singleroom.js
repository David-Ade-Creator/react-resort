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
    const {name,description,capacity,size,price,extras,
      breakfast,pets,images} = room;
  return (
    <div className="singleroompage">
    <div className="singleroomlanding">
    <Banner title={`${name} room`}>
     <Link to="/" className="room-link">Rooms</Link>
     </Banner>
    </div>
    </div>
  )
}
}
