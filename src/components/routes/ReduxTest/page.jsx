import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PT from 'prop-types';

class ReduxTest extends Component {
  render() {
    const { counter, minus, plus } = this.props;

    return (
      <div className="redux-test-page">
        <h1>Redux Test</h1>
        <h5>Number from redux-store: </h5>
        <span>{counter}</span>

        <hr />

        <h5>Actions from reducer: </h5>
        <Button color="danger" onClick={minus}>-</Button>
        <Button color="primary" onClick={plus}>+</Button>
      </div>
    );
  }
}

ReduxTest.propTypes = {
  counter: PT.number,
  minus: PT.func,
  plus: PT.func,
};

export default ReduxTest;
