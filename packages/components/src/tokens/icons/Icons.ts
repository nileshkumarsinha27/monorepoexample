import { ForwardRefExoticComponent, SVGAttributes } from 'react';

import Close from './components/basic/Close';
import Menu from './components/basic/Menu';
import ArrowRight from './components/navigation/ArrowRight';
import Check from './components/basic/Check';
import Trash from './components/basic/Trash';

// ============================================ //
export type IconData = {
  glyph: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement>>;
  textPairingGlyph?: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement>>;
  deprecated?: string | undefined;
  alias?: boolean;
  group?: 'basic' | 'navigation' | 'car' | 'media' | 'social' | 'text-pairing';
  followDirection?: boolean;
};

const _Icons = {
  menu: { glyph: Menu, group: 'basic' },
  trash: { glyph: Trash, group: 'basic' },
  close: { glyph: Close, group: 'basic' },
  arrowRight: { glyph: ArrowRight, group: 'navigation' },
  check: { glyph: Check, group: 'basic' }
};

const Icons = Object.freeze(_Icons) as {
  [key in keyof typeof _Icons]: IconData;
};

export default Icons;
