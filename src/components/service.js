import React,{Component} from 'react';
import Title from './title';

import { FaGolfBall,FaBeer,FaCocktail,FaClinicMedical } from "react-icons/fa";

export default class Service extends Component{
  state = {
    service :[
      {
        icon:<FaGolfBall/>,
        title:"Golf Course",
        info:"A well mapped golf course for golf lovers"
      },
      {
        icon:<FaClinicMedical/>,
        title:"Medical Center",
        info:"Medical center for any quick treatment incase emergencies"
      },
      {
        icon:<FaCocktail/>,
        title:"Free Cocktail",
        info:"Free cocktail as a token to our customers"
      },
      {
        icon:<FaBeer/>,
        title:"Strongest Bear",
        info:"We offer the best and strongest bear you can find around the city"
      }
    ]
  }
  render() {
  return(
    <div className="service">
    <Title title="Services"/>
    <div className="details">
    {this.state.service.map((item,i)=>{
      return <div key={i} className="detail-list">
      <span>{item.icon}</span>
      <h3>{item.title}</h3>
      <p>{item.info}</p>
      </div>
    })}
    </div>
    </div>
  )
}
};
