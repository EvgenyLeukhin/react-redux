import React from 'react';
import { Button } from 'reactstrap';
import PT from 'prop-types';

const ReduxTest = ({ counter, minus, plus }) => (
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

ReduxTest.propTypes = {
  counter: PT.number,
  minus: PT.func,
  plus: PT.func,
};

export default ReduxTest;
