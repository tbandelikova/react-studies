import React, { Component } from 'react';

class InputFile extends Component {
  render() {
    return (
      <div className="form-element">
        <input className="file" type="file" accept="image/*" />
      </div>
    );
  }
}

export default InputFile;
