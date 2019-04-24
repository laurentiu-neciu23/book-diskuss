import React, { Component } from 'react';
import { Form, Button, Row, Col, Container} from 'react-bootstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';

import 'react-notifications/lib/notifications.css';


class Login extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {};
  }

  submit() {
    axios.post('http://localhost:3000/api/v1/login', {user: this.state},
        { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    .then(function (response) {
      NotificationManager.success("User loggedin succesfully", "Success");
      this.props.changeDisplay("logged-in") 
    })
    .catch(function (error) {
      NotificationManager.error("Password or email do not much", "Error");
    });
  }

  handleChange(key, evet) {
    var event = {};
    event[key] = evet.target.value;
    this.setState(event);
  }


  render() {
    console.log(this.state)
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
              <Form.Control type="password" placeholder="Password" onChange={(evet) => this.handleChange("password", evet)} />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={this.submit}>
              Submit
            </Button>
            <Button variant="primary" type="submit" onClick={() => this.props.changeDisplay("register")}>
              Register
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

export default Login;
