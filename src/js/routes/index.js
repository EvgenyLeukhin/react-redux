import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from 'Routes/Login';
import Home from 'Routes/Home';
import Page1 from 'Routes/Page1';
import Page2 from 'Routes/Page2';
import Page404 from 'Routes/Page404';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login'  component={Login} />
      <Route path='/page-1' component={Page1} />
      <Route path='/page-2' component={Page2} />

      {/* unknown route */}
      <Route path="*"       component={Page404} />
    </Switch>
  )
}

export default Routes;
