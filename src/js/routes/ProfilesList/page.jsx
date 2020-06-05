import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ProfilesList extends Component {
  render() {
    return (
      <div>
        <h1>ProfilesList</h1>

        <span>{this.props.counter}</span>

        <hr />

        <Button color="danger" onClick={this.props.minus}>-</Button>
        <Button color="primary" onClick={this.props.plus}>+</Button>
      </div>
    )
  }
}

export default ProfilesList
