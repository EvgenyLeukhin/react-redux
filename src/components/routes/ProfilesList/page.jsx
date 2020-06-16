import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Helmet } from 'react-helmet';
import PT from 'prop-types';

import ErrorAlert from 'Common/ErrorAlert';

import columns from './columns';

class ProfilesList extends Component {
  componentDidMount() { this.props.fetchProfiles(); }

  render() {
    const { profiles, loading, error } = this.props;

    return (
      <div>
        <Helmet><title>React-Redux | Profiles list</title></Helmet>

        <h1>Profiles list</h1>

        <ErrorAlert error={error} />

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
