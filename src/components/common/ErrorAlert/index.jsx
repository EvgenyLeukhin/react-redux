import React from 'react';
import { Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PT from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import clearStorage from 'Utils/clearStorage';

const ErrorAlert = ({ error }) => {
  // redirect to login page if 401 error and clear localStorage
  if (error?.status === 401) {
    clearStorage();
    return <Redirect to='/login' />;

    // show error message
  } else {
    // eslint-disable-next-line no-console
    !isEmpty(error) && console.log('ERROR: ', error.response);
    return (
      <Alert color="danger" isOpen={!isEmpty(error)}>
        {`${error?.status} - ${error?.data?.error?.message}`}
      </Alert>
    );
  }
};

ErrorAlert.propTypes = {
  error: PT.object,
};


export default ErrorAlert;