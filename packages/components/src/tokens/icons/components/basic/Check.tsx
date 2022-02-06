import React, { forwardRef } from 'react';
const Check = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg viewBox="0 0 24 24" height="1em" role="img" ref={ref} {...props}>
    <path d="M24 5.55l-1.058-1.058L8.4 19.035l-7.343-7.343L0 12.75l8.4 8.4z" fill="currentColor" />
  </svg>
));
Check.displayName = 'Check';

export default Check;
