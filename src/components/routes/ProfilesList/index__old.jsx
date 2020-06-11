import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Helmet } from 'react-helmet';
import { Alert } from 'reactstrap';
import PT from 'prop-types';

import getUsers from 'Api/getUsers';
import clearStorage from 'Utils/clearStorage';

import columns from './columns';


class ProfilesList extends Component {
  state = {
    users: [],
    loading: false,
    error: false,
    errorText: ''
  }

  // CATCH ERRORS //
  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      clearStorage();

      this.props.history.push('/login');

    } else {
      // eslint-disable-next-line no-console
      console.log(error);
      this.setState({
        loading: false,
        error: true,
        errorText: error
      });
    }
  }

  closeAlert = () => this.setState({ error: false });

  componentDidMount() {
    this.setState({ loading: true });

    getUsers().then(res => {
      this.setState({
        users: res.data,
        loading: false,
      });
    }).catch(error => {
      this.catchErrors(error);
    });
  }


  render() {
    const { loading, users, error, errorText } = this.state;

    return (
      <div>
        <Helmet>
          <title>React-Redux | Profiles list</title>
        </Helmet>

        <Alert
          color="danger"
          isOpen={error}
          toggle={this.closeAlert}
        >
          {`${errorText}` || ''}
        </Alert>

        <h1>Profiles list</h1>

        <ReactTable
          className="-striped -highlight"
          loading={loading}
          columns={columns}
          data={users}
          filterable={true}
          resizable={true}
        />
      </div>
    );
  }
}

ProfilesList.propTypes = {
  history: PT.object,
};

export default ProfilesList;
