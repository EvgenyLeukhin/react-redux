import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Routes //
import Login from 'Routes/Login';
import Bootstrap from 'Routes/Bootstrap';
import Page1 from 'Routes/Page1';
import Page2 from 'Routes/Page2';

const Routes = () => {
  // check token
  const token = localStorage.getItem('react-redux-user-token');


  // if not login // --> to login page
  if (!token) {
    // remove token //
    localStorage.removeItem('react-redux-user-token');
    return <Login />


  // if login // --> get app Routes
  } else return (
    <Switch>
      <Route path='/' exact component={Bootstrap} />
      <Route path='/page-1' component={Page1} />
      <Route path='/page-2' component={Page2} />
    </Switch>
  )
}

export default Routes;
