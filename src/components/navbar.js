import React,{Component} from 'react';

import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component{
  state = {
    isOpen : false
  };
  handleToggle = () => {
    this.setState({isOpen : !this.state.isOpen});
  }
  render() {
  return (
    <div className="header">
     <div className="navbar">
      <span><h3>David's Resort</h3></span>
      <ul className="nav-link">
        <li><a href="/">HOME</a></li>
        <li><a href="/rooms">ROOMS</a></li>
        <li><a href="/">CONTACT</a></li>
        <li><a href="/">ABOUTUS</a></li>
      </ul>
      <span><button onClick={this.handleToggle}><FaAlignRight /></button></span>
     </div>
     <div className={this.state.isOpen? "res-nav display-nav" : "display-nav"}>
     <ul className="res-nav-link">
       <li><a href="/">HOME</a></li>
       <li><a href="/rooms">ROOMS</a></li>
       <li><a href="/">CONTACT</a></li>
       <li><a href="/">ABOUTUS</a></li>
     </ul>
     </div>
    </div>
  );
}
}
