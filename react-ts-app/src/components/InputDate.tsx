import React from 'react';

const InputDate = React.forwardRef<HTMLInputElement>((props, ref: React.Ref<HTMLInputElement>) => (
  <>
    <label htmlFor="dateInput">Birthday:</label>
    <input type="date" id="dateInput" ref={ref} {...props} />
  </>
));

InputDate.displayName = 'InputDate';
export default InputDate;
