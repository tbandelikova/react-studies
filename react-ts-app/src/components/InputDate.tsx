import React, { Component } from 'react';

class InputDate extends Component {
  render() {
    return (
      <div className="form-element">
        <label htmlFor="dateInput">Birthday:</label>
        <input type="date" name="date" id="dateInput" />
      </div>
    );
  }
}

export default InputDate;
