import React from 'react';

const InputSwitch = React.forwardRef<HTMLInputElement>((props, ref) => (
  <div className="switch">
    <input type="radio" id="male" ref={ref} value="Male" {...props} />
    <label htmlFor="male">Male</label>
    <input type="radio" id="female" ref={ref} value="Female" {...props} />
    <label htmlFor="female">Female</label>
  </div>
));
InputSwitch.displayName = 'InputSwitch';
export default InputSwitch;
