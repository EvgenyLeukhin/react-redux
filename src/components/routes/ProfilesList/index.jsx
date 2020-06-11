import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Helmet } from 'react-helmet';
import { Alert } from 'reactstrap';
import PT from 'prop-types';

import request from 'Utils/request';

import columns from './columns';


class ProfilesList extends Component {
  state = {
    users: [],
    loading: false,
    error: false,
    errorText: ''
  }

  closeAlert = () => this.setState({ error: false });

  componentDidMount() {
    this.setState({ loading: true });

    // get users request
    request('users/searchExtra', {}, this.props.history)
      .then(res    => this.setState({ loading: false, users: res.data, }))
      .catch(error => this.setState({ loading: false, error: true,  errorText: error, }));
  }

  render() {
    const { loading, users, error, errorText } = this.state;

    return (
      <div>
        <Helmet><title>React-Redux | Profiles list</title></Helmet>

        <Alert
          color="danger"
          isOpen={error}
          toggle={this.closeAlert}
        >
          {`${errorText}` || ''}
        </Alert>

        <h1>Profiles list</h1>

        <ReactTable
          data={users}
          resizable={true}
          loading={loading}
          columns={columns}
          filterable={true}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

ProfilesList.propTypes = { history: PT.object, };

export default ProfilesList;
