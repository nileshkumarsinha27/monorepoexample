import React, { forwardRef } from 'react';
const Trash = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg viewBox="0 0 24 24" fill="none" height="1em" role="img" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 1.5h1.5a1.5 1.5 0 011.5 1.5v1.5h-4.5V3a1.5 1.5 0 011.5-1.5zm4.5 1.5v1.5H24V6h-3v18H3V6H0V4.5h8.25V3a3 3 0 013-3h1.5a3 3 0 013 3zm0 3h3.75v16.5h-15V6h11.25zm-7.5 2.25h1.5v12h-1.5v-12zm6 0h1.5v12h-1.5v-12z"
      fill="currentColor"
    />
  </svg>
));
Trash.displayName = 'Trash';
export default Trash;
