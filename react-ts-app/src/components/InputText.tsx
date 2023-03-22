import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return (
      <div className="form-element">
        <label htmlFor="textInput">Name:</label>
        <input type="text" name="name" id="textInput" />
      </div>
    );
  }
}

export default InputText;
