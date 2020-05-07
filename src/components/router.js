import React from 'react';
import {Route,Switch} from 'react-router-dom';

import HomePage from './../pages/home';
import RoomsPage from './../pages/rooms';
import SingleRoomPage from './../pages/singleroom';
import ErrorPage from './../pages/error';

function RouterPage(){
  return (
    <>
    <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/rooms" component={RoomsPage} exact/>
    <Route path="/singleroom/:slir" component={SingleRoomPage} exact />
    <Route component={ErrorPage} exact />
    </Switch>
    </>
  )
}

export default RouterPage;
