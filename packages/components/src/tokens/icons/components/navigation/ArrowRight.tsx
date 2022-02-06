import React, { forwardRef } from 'react';

const ArrowRight = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    role="img"
    ref={ref}
    {...props}
  >
    <path
      d="M12 0l-1.057 1.058L21.135 11.25H0v1.5h21.135L10.942 22.942 12 24l12-12L12 0z"
      fill="currentColor"
    />
  </svg>
));
ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
