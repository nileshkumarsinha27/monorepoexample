import React, { forwardRef } from 'react';

const Close = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg
    viewBox="0 0 18 24"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    role="img"
    ref={ref}
    {...props}
  >
    <path
      d="M18.015 19.957L10.058 12l7.957-7.958-1.058-1.057L9 10.942 1.042 2.985-.015 4.042 7.942 12l-7.957 7.957 1.057 1.058L9 13.058l7.958 7.957z"
      fill="currentColor"
    />
  </svg>
));
Close.displayName = 'Close';
export default Close;
