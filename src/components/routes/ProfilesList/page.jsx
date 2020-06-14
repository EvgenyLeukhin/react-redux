import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Helmet } from 'react-helmet';
import { Alert } from 'reactstrap';
import PT from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import columns from './columns';

class ProfilesList extends Component {
  componentDidMount() { this.props.fetchProfiles(); }

  render() {
    const { profiles, loading, error } = this.props;

    return (
      <div>
        <Helmet><title>React-Redux | Profiles list</title></Helmet>

        <h1>Profiles list</h1>

        <Alert color="danger" isOpen={!isEmpty(error)}>
          {`${error?.status} - ${error?.data?.error?.message}`}
        </Alert>

        <ReactTable
          className="-striped -highlight"
          loading={loading}
          columns={columns}
          data={profiles}
          filterable={true}
          resizable={true}
        />
      </div>
    );
  }
}

ProfilesList.propTypes = {
  fetchProfiles: PT.func,
  error: PT.object,
  profiles: PT.array,
  loading: PT.bool,
};

export default ProfilesList;
