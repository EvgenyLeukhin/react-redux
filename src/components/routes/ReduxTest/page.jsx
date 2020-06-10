import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ReduxTest extends Component {
  render() {
    return (
      <div className="redux-test-page">
        <h1>Redux Test</h1>
        <h5>Number from redux-store: </h5>
        <span>{this.props.counter}</span>

        <hr />

        <h5>Actions from reducer: </h5>
        <Button color="danger" onClick={this.props.minus}>-</Button>
        <Button color="primary" onClick={this.props.plus}>+</Button>
      </div>
    );
  }
}

export default ReduxTest;
