import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <>
    <h1>404 - Not Found Page</h1>

    <p>
      <Link to="/">Go to Home </Link>
    </p>
  </>
)

export default NotFoundPage;
