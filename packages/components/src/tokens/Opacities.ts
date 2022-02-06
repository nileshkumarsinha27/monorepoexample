export type Opacity = number;

enum Opacities {
  full = 1,
  xxMedium = 0.95,
  xMedium = 0.8,
  medium = 0.6,
  low = 0.3,
  xLow = 0.15,
  none = 0
}

export default Opacities;

export const createCustomOpacity = (value: number): number => value;
