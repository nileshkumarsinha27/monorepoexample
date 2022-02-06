import { Opacity } from './Opacities';
type ColorObject = {
  red: number;
  green: number;
  blue: number;
  opacity?: number;
};

type ColorString = string;

export type Color = ColorString;

/**
 * @internal
 */
export function fromHexString(hex: string): ColorObject {
  let red = '0',
    green = '0',
    blue = '0';
  let opacity = '0xff';

  // 3 digits
  if (hex.length === 4) {
    red = '0x' + hex[1] + hex[1];
    green = '0x' + hex[2] + hex[2];
    blue = '0x' + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length === 7) {
    red = '0x' + hex[1] + hex[2];
    green = '0x' + hex[3] + hex[4];
    blue = '0x' + hex[5] + hex[6];
  } else if (hex.length === 9) {
    red = '0x' + hex[1] + hex[2];
    green = '0x' + hex[3] + hex[4];
    blue = '0x' + hex[5] + hex[6];
    opacity = '0x' + hex[7] + hex[8];
  }

  return {
    red: parseInt(red),
    green: parseInt(green),
    blue: parseInt(blue),
    opacity: parseInt(opacity) / 255
  };
}

function fromRGBString(rgb: string): ColorObject {
  const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  const isRGBA = rgb.indexOf('rgba(') > -1;
  const [red, green, blue, opacity] = rgb
    .substr(isRGBA ? 5 : 4)
    .split(')')[0]
    .split(sep);

  return {
    red: parseInt(red),
    green: parseInt(green),
    blue: parseInt(blue),
    opacity: parseFloat(opacity) || 1
  };
}

export function fromString(color: ColorString | ColorObject): ColorObject {
  if (typeof color === 'string') {
    color = color.trim();

    if (color.startsWith('rgba')) {
      return fromRGBString(color);
    }
    if (color.startsWith('rgb')) {
      return fromRGBString(color);
    }

    return fromHexString(color);
  }

  return color;
}

export function withOpacity(color: ColorString | ColorObject, opacity: Opacity): Color {
  const colorObject = fromString(color);
  return `rgba(${colorObject.red}, ${colorObject.green}, ${colorObject.blue}, ${opacity})`;
}

export function isLight(color: ColorString | ColorObject): boolean {
  const colorObject = fromString(color);

  const perceivedLightness = Math.sqrt(
    0.299 * Math.pow(colorObject.red, 2) +
      0.587 * Math.pow(colorObject.green, 2) +
      0.114 * Math.pow(colorObject.blue, 2)
  );

  return perceivedLightness > 127.5;
}

/**
 * Darken
 * @param {number} color The color to darken
 * @param {number} amount The amount to darken between 0 and 1
 */
export function darken(color: ColorString | ColorObject, amount: number): Color {
  const colorObject = fromString(color);

  return `rgba(
    ${Math.max(0, colorObject.red - 255 * amount)},
    ${Math.max(0, colorObject.green - 255 * amount)},
    ${Math.max(0, colorObject.blue - 255 * amount)},
    ${colorObject.opacity}
  )`;
}

/**
 * Lighten
 * @param {number} color The color to lighten
 * @param {number} amount The amount to lighten between 0 and 1
 */
export function lighten(color: ColorString | ColorObject, amount: number): Color {
  const colorObject = fromString(color);

  return `rgba(
    ${Math.min(255, colorObject.red + 255 * amount)},
    ${Math.min(255, colorObject.green + 255 * amount)},
    ${Math.min(255, colorObject.blue + 255 * amount)},
    ${colorObject.opacity}
  )`;
}

/**
 * blend
 * @param {number} backgroundColor The background color to use
 * @param {number} color The color to use
 * @param {number} opacity The amount to merge between 0 and 1
 */
/* eslint-disable */
export function blend(backgroundColor: ColorString, color: ColorString, opacity: number) {
  const backgroundColorObject = fromString(backgroundColor);
  const colorObject = fromString(color);
  return `rgb(${Math.round((1 - opacity) * backgroundColorObject.red + opacity * colorObject.red)},
  ${Math.round((1 - opacity) * backgroundColorObject.green + opacity * colorObject.green)},
  ${Math.round((1 - opacity) * backgroundColorObject.blue + opacity * colorObject.blue)})`;
}

/**
 * Highlight
 * @param {number} amount The amount to highlight between 0 and 1
 */
export function highlight(color: ColorString | ColorObject, amount: number): Color {
  return isLight(color) ? darken(color, amount) : lighten(color, amount);
}
const Colors = {
  black: 'rgb(0,0,0)',
  white: 'rgb(255,255,255)',
  boxShadow1: 'rgba(0,0,0,0.12)',
  mint: '#DDFFE7',
  teal: '#29A0B1',
  spearMint: '#98D7C2',
  tealGreen: '#167D7F',
  transparent: 'transparent'
};

export default Colors;
