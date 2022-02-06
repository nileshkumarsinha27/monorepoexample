import Breakpoints from './BreakPoints';

export type MediaQuery = string;

export const createMediaQuery = (
  minWidth: number,
  type = 'media',
  maxWidth: number | undefined = undefined
): string =>
  `@${type} (min-width: ${minWidth}px)${
    maxWidth !== undefined ? ` and (max-width: ${maxWidth}px)` : ''
  }`;

const maxMobile = Breakpoints.tablet - 0.1;

const MediaQueries = Object.freeze({
  mobile: createMediaQuery(Breakpoints.mobile),
  tablet: createMediaQuery(Breakpoints.tablet),
  desktop: createMediaQuery(Breakpoints.desktop),
  desktopWide: createMediaQuery(Breakpoints.desktopWide),
  smallMobileOnly: createMediaQuery(0, 'media', Breakpoints.smallMobile - 1),
  mobileOnly: createMediaQuery(Breakpoints.mobile, 'media', maxMobile),
  tabletOnly: createMediaQuery(Breakpoints.tablet, 'media', Breakpoints.desktop - 1),
  tillTablet: createMediaQuery(0, 'media', Breakpoints.desktop - 1),
  mobileLandscape: `@media (max-width: ${maxMobile}px) and (orientation: landscape)`,
  mobilePortrait: `@media (max-width: ${maxMobile}px) and (orientation: portrait)`,
  landscape: `@media (orientation: landscape)`,
  portrait: `@media (orientation: portrait)`,
  smallMediaQueryValue: `(max-width: ${maxMobile}px)`,
  largeMediaQueryValue: `(min-width: ${Breakpoints.tablet}px)`
});

export default MediaQueries;
