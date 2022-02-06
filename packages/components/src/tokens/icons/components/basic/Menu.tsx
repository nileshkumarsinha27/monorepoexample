import React, { forwardRef } from 'react';

const Menu = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    role="img"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M24 22.5H0V24h24zM24 11.25H0v1.5h24zM24 0H0v1.5h24z" />
    </g>
  </svg>
));
Menu.displayName = 'Menu';
export default Menu;
