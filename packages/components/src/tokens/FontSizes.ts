import { Property } from 'csstype';

export type FontSize = Property.FontSize<string>;

enum FontSizes {
  large = '2rem', // 32px
  body = '1rem' // 16px
}

export default FontSizes;

export const createCustomFontSize = (multiplier: number): string => `${multiplier}rem`;
