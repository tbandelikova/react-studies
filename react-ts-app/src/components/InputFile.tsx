import React from 'react';

const InputFile = React.forwardRef<HTMLInputElement>((props, ref) => (
  <input className="file" type="file" accept="image/*" ref={ref} {...props} />
));
InputFile.displayName = 'InputFile';
export default InputFile;
