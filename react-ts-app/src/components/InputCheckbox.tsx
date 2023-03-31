import React from 'react';

const InputCheckbox = React.forwardRef<HTMLInputElement>((props, ref) => (
  <label htmlFor="consent">
    <span>I consent to my personal data</span>
    <input className="check" type="checkbox" id="consent" ref={ref} {...props} />
  </label>
));
InputCheckbox.displayName = 'InputCheckbox';
export default InputCheckbox;
