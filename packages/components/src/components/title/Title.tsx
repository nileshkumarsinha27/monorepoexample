import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import Spacings from '../../tokens/Spacings';
import { TextProps } from '../text/Text';

export interface TitleProps extends TextProps {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, ...props }: TitleProps, ref) => (
    <TitleContainer ref={ref} {...props}>
      {children}
    </TitleContainer>
  )
);

export default Title;

Title.displayName = 'Title';

const TitleContainer = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${Spacings.xxLarge};
`;
