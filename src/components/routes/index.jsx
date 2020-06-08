import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from 'Routes/ProtectedRoute';

import Layout from 'Layout';

// import routes with lazy load
const Login        = lazy(() => import('Routes/Login'));
const Home         = lazy(() => import('Routes/Home'));
const ProfileAdd   = lazy(() => import('Routes/ProfileAdd'));
const ProfileShow  = lazy(() => import('Routes/ProfileShow'));
const ProfileEdit  = lazy(() => import('Routes/ProfileEdit'));
const ProfilesList = lazy(() => import('Routes/ProfilesList'));
const ReduxTest    = lazy(() => import('Routes/ReduxTest'));
const Page404      = lazy(() => import('Routes/Page404'));


const Routes = () => {
  return (
    <Suspense fallback={<Layout />}>

      <Switch>
        {/* Login route */}
        <Route path='/login' component={Login} />

        {/* App protected routes */}
        <ProtectedRoute path='/' exact       component={Home} />
        <ProtectedRoute path='/profile/add'  component={ProfileAdd} />
        <ProtectedRoute path='/profile/edit' component={ProfileEdit} />
        <ProtectedRoute path='/profile'      component={ProfileShow} />
        <ProtectedRoute path='/profiles'     component={ProfilesList} />
        <ProtectedRoute path='/redux-test'   component={ReduxTest} />

        {/* Unknown route */}
        <ProtectedRoute path="*" component={Page404} />
      </Switch>
    </Suspense>
  )
}

export default Routes;
