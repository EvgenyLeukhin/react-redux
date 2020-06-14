import isEmpty from 'lodash/isEmpty';
import clearStorage from 'Utils/clearStorage';

const catchHandler = (error) => {
  if (!isEmpty(error)) {
    // eslint-disable-next-line no-console
    console.log('ERROR: ', error.response);

    const { statusCode } = error.response.data.error;

    if (statusCode === 401) {
      clearStorage();
    }
  }
};

export default catchHandler;
