import React, { Component, ForwardedRef } from 'react';

type PropWithRef = {
  inputTextRef: ForwardedRef<HTMLInputElement>;
};

class InputT extends Component<PropWithRef> {
  render() {
    const { inputTextRef } = this.props;
    return <input type="text" name="name" id="textInput" ref={inputTextRef} required={true} />;
  }
}

export const InputText = React.forwardRef<HTMLInputElement>((props, ref) => (
  <InputT inputTextRef={ref} {...props} />
));
