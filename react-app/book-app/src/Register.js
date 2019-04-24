import React, { Component } from 'react';
import { Form, Button, Row, Col, Container} from 'react-bootstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';

import 'react-notifications/lib/notifications.css';


class Register extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {};
  }

  submit() {
    axios.post('http://localhost:3000/api/v1/signup', this.state,
        { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    .then(function (response) {
      console.log(response);
      NotificationManager.success("User registered succesfully", "Success");
    })
    .catch(function (error) {
      if(error.response.data.errors.email) {
        NotificationManager.error("Email " + error.response.data.errors.email, "Error");
      }

      if(error.response.data.erros.password) {
        NotificationManager.error("Password " + error.response.data.errors.email, "Error");
      }
    });
  }

  handleChange(key, evet) {
    var event = {};
    event[key] = evet.target.value;
    this.setState(event);
  }

  render() {
    console.log(this.state);
    return (
      <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(evet) => this.handleChange("email", evet)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(evet) => this.handleChange("password", evet)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(evet) => this.handleChange("password_confirmation", evet)} />
            </Form.Group>
            <Button variant="primary" onClick={this.submit}>
              Submit
            </Button>
            <Button variant="primary" onClick={() => this.props.changeDisplay("login") }>
              Login
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <NotificationContainer/>
    </Container>
    );
  }
}

export default Register;
