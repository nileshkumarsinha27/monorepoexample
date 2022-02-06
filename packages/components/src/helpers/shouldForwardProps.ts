/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @internal
 */
import isPropValid from '@emotion/is-prop-valid';
import { StyledOptions } from '@emotion/styled/base';

export const shouldForwardValidProps: StyledOptions<any> = {
  shouldForwardProp: (prop: string) => {
    return isPropValid(prop);
  }
};

export const shouldNotForwardProps = (
  checkValid: boolean,
  ...props: string[]
): StyledOptions<any> => {
  return {
    shouldForwardProp: (prop: string) => {
      return checkValid
        ? isPropValid(prop) && props.indexOf(prop) === -1
        : props.indexOf(prop) === -1;
    }
  };
};

const themeProps = [
  'fontWeight',
  'fontFamily',
  'color',
  'opacity',
  'fontStyle',
  'fontSize',
  'letterSpacing',
  'spacing',
  'orientation',
  'size',
  'sizes'
];

export const shouldNotForwardThemeProps: StyledOptions<any> = {
  shouldForwardProp: (prop: string) => {
    return isPropValid(prop) && themeProps.indexOf(prop) === -1;
  }
};
