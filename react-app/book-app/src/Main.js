import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login.js'
import Register from './Register.js'

import './App.css';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {display: "login"}
    this.changeDisplay = this.changeDisplay.bind(this)
  }

  changeDisplay(value) {
    this.setState({display: value})
  }

  render() {
    if (this.state.display === "login") {
      return <Login changeDisplay={this.changeDisplay}></Login>
    } else if (this.state.display === "register") {
      return <Register changeDisplay={this.changeDisplay}></Register>
    } else {
      return <h1> Todo </h1>
    }
  }
}

export default Main;
