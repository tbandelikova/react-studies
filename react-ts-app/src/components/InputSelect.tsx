import React, { Component, ForwardedRef } from 'react';

type PropWithRef = {
  inputSelectRef: ForwardedRef<HTMLSelectElement>;
};

class InputS extends Component<PropWithRef> {
  render() {
    const { inputSelectRef } = this.props;
    return (
      <label className="select" htmlFor="location">
        Current location:
        <select name="location" id="location" ref={inputSelectRef}>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="Lithuania">Lithuania</option>
        </select>
      </label>
    );
  }
}

export const InputSelect = React.forwardRef<HTMLSelectElement>((props, ref) => (
  <InputS inputSelectRef={ref} {...props} />
));
