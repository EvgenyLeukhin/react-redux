import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from 'Components/ProtectedRoute';

// import routes
import Login from 'Routes/Login';
import Home from 'Routes/Home';
import Page1 from 'Routes/Page1';
import Page2 from 'Routes/Page2';
import Page404 from 'Routes/Page404';


const Routes = () => {
  return (
    <Switch>
      {/* Login route */}
      <Route path='/login' component={Login} />

      {/* App protected routes */}
      <ProtectedRoute path='/' exact component={Home} />
      <ProtectedRoute path='/page-1' component={Page1} />
      <ProtectedRoute path='/page-2' component={Page2} />

      {/* Unknown route */}
      <ProtectedRoute path="*" component={Page404} />
    </Switch>
  )
}

export default Routes;
