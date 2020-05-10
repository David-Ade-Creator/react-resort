import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomConsumer} from '../context';
//import Loading from './loading';

export default function RoomsContainer () {
  return (
    <RoomConsumer>
    {value => {
      const {loading,sortedRooms,rooms} = value;
        return(
         <div>
          hello from rooms container
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
         </div>
        );
      }
    }
    </RoomConsumer>
  )
}
