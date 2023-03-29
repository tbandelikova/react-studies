import React, { Component, ForwardedRef } from 'react';

type PropWithRef = {
  inputSwitchRef: ForwardedRef<HTMLInputElement>;
};

class InputSw extends Component<PropWithRef> {
  render() {
    const { inputSwitchRef } = this.props;
    return (
      <div className="switch">
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          defaultChecked={true}
          ref={inputSwitchRef}
        />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label>
      </div>
    );
  }
}

export const InputSwitch = React.forwardRef<HTMLInputElement>((props, ref) => (
  <InputSw inputSwitchRef={ref} {...props} />
));
