import { css } from '@emotion/react';
import { shouldNotForwardProps } from '../../helpers/shouldForwardProps';
import styled from '@emotion/styled';
import { Color } from '../../tokens/Colors';
import { IconData } from '../../tokens/icons/Icons';
import { Opacity } from '../../tokens/Opacities';
import React, { forwardRef } from 'react';
import { FontSize } from '../../tokens/FontSizes';
import { useDirection } from '../../contexts/direction';

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children' | 'color'> {
  /**
   * You can provide the font, glyph and preferred size as IconData
   */
  icon: IconData;
  /**
   * The size of the icon
   *
   * @default inherits the font-size
   */
  size?: FontSize | IconSizes;
  /**
   * The color of the icon
   */
  color?: Color;
  /**
   * The opacity of the icon
   */
  opacity?: Opacity;

  /**
   * Pick the correct icon if available, also make sure the spacing for the icon is correct.
   */
  pairedWithText?: boolean;

  /**
   * Offsets the icon top based on `pairedWithText` prop
   */
  topOffset?: boolean;
}

// Can't use createCustomFontSize inside an enum
export enum IconSizes {
  small = '0.6667rem', // 16/1,5/12 = 0.6667rem
  medium = '1rem', // 24/1,5/16 = 1rem
  large = '1.333rem', // 32/1.5/16 = 1.333333333rem
  xLarge = '1.833rem' // 44/1.5/16 = 1.833333333rem
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ icon, pairedWithText = true, topOffset = true, ...props }: IconProps, ref) => {
    const { isRTL } = useDirection();
    if (!icon || !icon.glyph) {
      console.warn('[Icon] Given icon prop is not valid Icon data');
      return null;
    }

    const IconComponent =
      pairedWithText && icon.textPairingGlyph ? icon.textPairingGlyph : icon.glyph;

    const iconProps = {
      height: pairedWithText && icon.textPairingGlyph ? '1em' : '100%'
    };

    return (
      <Container
        aria-hidden={true}
        {...props}
        ref={ref}
        topOffset={pairedWithText && topOffset ? true : undefined}
        mirrored={isRTL && icon.followDirection ? true : undefined}
      >
        <IconComponent {...iconProps} />
      </Container>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;

const Container = styled(
  'span',
  shouldNotForwardProps(true, 'icon', 'color', 'opacity', 'size', 'mirrored', 'topOffset')
)<{
  size?: FontSize | IconSizes;
  color?: Color;
  opacity?: Opacity;
  mirrored?: true;
  topOffset?: true;
}>(({ size, color, opacity, mirrored, topOffset = false }) =>
  css(
    css`
      font-size: ${size || '1em'};
      ${`height: calc(1.5 * ${
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        IconSizes?.[size] || size || '1em'
      });`}
      user-select: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `,
    topOffset &&
      !mirrored &&
      css`
        > svg {
          transform: translateY(-1px);
        }
      `,
    color &&
      css`
        color: ${color};
      `,
    opacity &&
      css`
        opacity: ${opacity};
      `,
    mirrored &&
      css`
        > svg {
          transform: scaleX(-1) ${topOffset ? `translateY(-6.25%)` : ''};
        }
      `
  )
);
Container.displayName = 'Container';
