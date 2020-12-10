import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

  state = {
    password: '',
    clicked: false,
    validated: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  handleEnterKey = e => {
    if(e.key === 'Enter') {
      this.handleChange(e);
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
          onKeyPress={this.handleEnterKey}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;