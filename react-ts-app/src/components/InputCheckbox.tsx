import React, { Component, ForwardedRef } from 'react';

type PropWithRef = {
  inputCheckRef: ForwardedRef<HTMLInputElement>;
};

class InputCh extends Component<PropWithRef> {
  render() {
    const { inputCheckRef } = this.props;
    return (
      <label htmlFor="data">
        <span>I consent to my personal data</span>
        <input className="check" type="checkbox" name="data" id="data" ref={inputCheckRef} />
      </label>
    );
  }
}

export const InputCheckbox = React.forwardRef<HTMLInputElement>((props, ref) => (
  <InputCh inputCheckRef={ref} {...props} />
));
