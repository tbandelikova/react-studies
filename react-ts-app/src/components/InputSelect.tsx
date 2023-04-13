import React from 'react';

export const InputSelect = React.forwardRef<HTMLSelectElement>((props, ref) => (
  <label className="select" htmlFor="location">
    Current location:
    <select name="location" id="location" ref={ref} {...props}>
      <option value=""></option>
      <option value="Belarus">Belarus</option>
      <option value="Ukraine">Ukraine</option>
      <option value="Poland">Poland</option>
      <option value="Lithuania">Lithuania</option>
    </select>
  </label>
));

InputSelect.displayName = 'InputSelect';
export default InputSelect;
