import React from 'react';

const InputText = React.forwardRef<HTMLInputElement>((props, ref: React.Ref<HTMLInputElement>) => (
  <>
    <label htmlFor="textInput">Name:</label>
    <input type="text" id="textInput" ref={ref} {...props} />
  </>
));
InputText.displayName = 'InputText';
export default InputText;
