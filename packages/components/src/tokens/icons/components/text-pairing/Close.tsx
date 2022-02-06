import React, { forwardRef } from 'react';

const Close = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg
    viewBox="0 0 10 16"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    role="img"
    ref={ref}
    {...props}
  >
    <path
      d="M8.6 3.125l-3.675 3.75-3.675-3.75L.125 4.25l3.75 3.675-3.75 3.75 1.125 1.05 3.675-3.75 3.675 3.75 1.125-1.05-3.75-3.75 3.75-3.675z"
      fill="currentColor"
    />
  </svg>
));
Close.displayName = 'Close';
export default Close;
