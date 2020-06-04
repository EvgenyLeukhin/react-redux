import React, { Component } from 'react';
import ReactTable from "react-table";
import getUsers from 'Api/getUsers';

import columns from './columns';


class Profiles extends Component {
  state = {
    users: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true });

    getUsers().then(res => {
      console.log(res.data);

      this.setState({
        users: res.data,
        loading: false,
      });
    })
  }


  render() {
    const { loading, users } = this.state;

    return (
      <div>
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
    )
  }
}

export default Profiles;
