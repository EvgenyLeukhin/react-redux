import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from 'Components/ProtectedRoute';

import Layout from 'Layout';

// import routes with lazy load
const Login       = lazy(() => import('Routes/Login'));
const Home        = lazy(() => import('Routes/Home'));
const Profile     = lazy(() => import('Routes/Profile'));
const Page1       = lazy(() => import('Routes/Page1'));
const Page2       = lazy(() => import('Routes/Page2'));
const Page404     = lazy(() => import('Routes/Page404'));


const Routes = () => {
  return (
    <Suspense fallback={<Layout />}>

      <Switch>
        {/* Login route */}
        <Route path='/login' component={Login} />

        {/* App protected routes */}
        <ProtectedRoute path='/' exact  component={Home} />
        <ProtectedRoute path='/profile' component={Profile} />
        <ProtectedRoute path='/page-1'  component={Page1} />
        <ProtectedRoute path='/page-2'  component={Page2} />

        {/* Unknown route */}
        <ProtectedRoute path="*" component={Page404} />
      </Switch>
    </Suspense>
  )
}

export default Routes;
