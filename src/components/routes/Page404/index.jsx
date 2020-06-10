import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

const NotFoundPage = () => {
  return (
    <Container className="text-center">
      <Helmet>
        <title>React-Redux | 404 page</title>
      </Helmet>

      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <p className="error-details">
        Sorry, an error has occured, Requested page not found!
      </p>

      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </Container>
  );
};

export default NotFoundPage;
