import React, { forwardRef } from 'react';
const Check = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg viewBox="0 0 12 16" height="1em" role="img" ref={ref} {...props}>
    <path d="M12 4.55L10.95 3.5l-6.9 6.9-3-3L0 8.45l4.05 4.05z" fill="currentColor" />
  </svg>
));
Check.displayName = 'Check';
export default Check;
