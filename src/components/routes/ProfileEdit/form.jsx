import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import isEmpty from 'lodash/isEmpty';

const EditForm = ({
  // fields
  name, email, surname, job_title, status, emailVerified, emailJobApplication, emailMarketing, emailSettings, id, modified, created, lastLogin,

  // actions
  editUserSubmit, deleteModalOpen, onChange, deleteImage, editLoading,

  // image
  image, onChangeImage,
}) => {
  return (
    <Form
      action=""
      method="post"
      className="edit-profile__form"
      onSubmit={editUserSubmit}
    >
      <Container>
        <h4>Avatar</h4>
        <Row>
          <Col xs="12">
            <FormGroup>
              <Label for="user-edit__name">Paste image url</Label>

              <Input
                id="user-edit__image"
                type="url"
                name="image"
                value={!isEmpty(image) ? image.url : ''}
                onChange={onChangeImage}
              />

              {
                (!isEmpty(image) && image.url) ? (
                  <img
                    src={image.url}
                    className="img-fluid  user-avatar"
                    alt="Responsive image"
                  />
                ) : <div className="no-image" />
              }
            </FormGroup>
            <Button
              color="danger"
              onClick={deleteImage}
              disabled={!image.url}
              outline
            >
              Remove image
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container>
        <h4>Text fields</h4>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="user-edit__name">Name</Label>
              <Input
                id="user-edit__name"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="user-edit__email">Email</Label>
              <Input
                id="user-edit__email"
                type="text"
                name="email"
                value={email}
                onChange={onChange}
              />
            </FormGroup>

          </Col>

          <Col xs="12" md="6">
            <FormGroup>
              <Label for="user-edit__surname">Surname</Label>
              <Input
                id="user-edit__surname"
                type="text"
                name="surname"
                value={surname}
                onChange={onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="user-edit__job_title">Job title</Label>
              <Input
                id="user-edit__job_title"
                type="text"
                name="job_title"
                value={job_title}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container>
        <h4>Statuses</h4>
        <Row>
          <Col xs="12" md="6">
            <FormGroup check>
              <Label check>
                <Input
                  name="status"
                  onChange={onChange}
                  type="checkbox"
                  checked={status}
                />
                User activity
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  name="emailVerified"
                  onChange={onChange}
                  type="checkbox"
                  checked={emailVerified}
                />
                Email verified
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container>
        <h4>Notifications</h4>
        <Row>
          <Col xs="12" md="6">
            <FormGroup check>
              <Label check>
                <Input
                  name="emailJobApplication"
                  onChange={onChange}
                  type="checkbox"
                  checked={emailJobApplication}
                />
                Email job application
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  name="emailMarketing"
                  onChange={onChange}
                  type="checkbox"
                  checked={emailMarketing}
                />
                Email marketing
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  name="emailSettings"
                  onChange={onChange}
                  type="checkbox"
                  checked={emailSettings}
                />
                Email settings
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container>
        <h4>Not editable</h4>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="user-edit__id">Id</Label>
              <Input
                disabled
                id="user-edit__id"
                type="number"
                name="id"
                value={id}
                onChange={onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="user-edit__modified">Modified</Label>
              <Input
                disabled
                id="user-edit__modified"
                type="data"
                name="modified"
                value={modified}
                onChange={onChange}
              />
            </FormGroup>
          </Col>

          <Col xs="12" md="6">
            <FormGroup>
              <Label for="user-edit__created">Created</Label>
              <Input
                disabled
                id="user-edit__created"
                type="data"
                name="created"
                value={created}
                onChange={onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="user-edit__lastLogin">Last login</Label>
              <Input
                disabled
                id="user-edit__lastLogin"
                type="data"
                name="lastLogin"
                value={lastLogin}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <hr />

        <div className="edit-profile__btns">
          <Button color="primary" type="submit">
            { editLoading ? <Spinner /> : 'Save changes' }
          </Button>

          <Button color="danger" onClick={deleteModalOpen} outline>
            Delete user
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default EditForm;
