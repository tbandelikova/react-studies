import React, { Component, ForwardedRef } from 'react';

type PropWithRef = {
  inputFileRef: ForwardedRef<HTMLInputElement>;
};

class InputF extends Component<PropWithRef> {
  render() {
    const { inputFileRef } = this.props;
    return <input className="file" type="file" accept="image/*" ref={inputFileRef} />;
  }
}

export const InputFile = React.forwardRef<HTMLInputElement>((props, ref) => (
  <InputF inputFileRef={ref} {...props} />
));
