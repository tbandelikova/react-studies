import React, { Component } from 'react';

class InputSwitch extends Component {
  render() {
    return (
      <div className="form-element">
        <div className="switch">
          <input type="radio" id="male" name="gender" value="Male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="Female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    );
  }
}

export default InputSwitch;
