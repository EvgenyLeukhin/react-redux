import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>React-Redux | 404 page</title>
    </Helmet>

    <h1>404 - Not Found Page</h1>

    <p>
      <Link to="/">Go to Home </Link>
    </p>
  </>
)

export default NotFoundPage;
