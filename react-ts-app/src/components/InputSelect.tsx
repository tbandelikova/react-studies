import React, { Component } from 'react';

class InputSelect extends Component {
  render() {
    return (
      <div className="form-element">
        <label className="select" htmlFor="location">
          Current location:
          <select name="location" id="location">
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
            <option value="Lithuania">Lithuania</option>
          </select>
        </label>
      </div>
    );
  }
}

export default InputSelect;
