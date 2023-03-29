import React, { Component, ForwardedRef } from 'react';

type PropWithRef = {
  inputDateRef: ForwardedRef<HTMLInputElement>;
};

class InputD extends Component<PropWithRef> {
  render() {
    const { inputDateRef } = this.props;
    return <input type="date" name="date" id="dateInput" ref={inputDateRef} required={true} />;
  }
}

export const InputDate = React.forwardRef<HTMLInputElement>((props, ref) => (
  <InputD inputDateRef={ref} {...props} />
));
