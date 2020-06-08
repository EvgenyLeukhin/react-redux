import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import isEmpty from 'lodash/isEmpty';

const AddForm = ({
  // fields
  name, surname, email, password,

  // actions
  addUserSubmit, onChange, addLoading, cancelClick,
}) => {
  return (
    <Form
      action=""
      method="post"
      className="add-profile__form"
      onSubmit={addUserSubmit}
    >
      <Container>
        <Row>
          <Col xs="12" sm="6">
            <FormGroup>
              <Label for="user-add__name">Name</Label>
              <Input
                id="user-add__name"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
              />
            </FormGroup>
          </Col>

          <Col xs="12" sm="6">
            <FormGroup>
              <Label for="user-add__surname">Surame</Label>
              <Input
                id="user-add__surname"
                type="text"
                name="surname"
                value={surname}
                onChange={onChange}
              />
            </FormGroup>
          </Col>

          <Col xs="12" sm="6">
            <FormGroup>
              <Label for="user-add__password">Password</Label>
              <Input
                id="user-add__password"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </FormGroup>
          </Col>

          <Col xs="12" sm="6">
            <FormGroup>
              <Label for="user-add__email">Email</Label>
              <Input
                id="user-add__email"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <hr />

        <div className="add-profile__btns">
          <Button
            color="primary"
            type="submit"
            disabled={!name || !surname || !email || !password}
          >
            {addLoading ? <Spinner /> : 'Add'}
          </Button>

          <Button color="secondary" onClick={cancelClick} outline>
            Cancel
          </Button>
        </div>
      </Container>
    </Form>
  )
}

export default AddForm;
