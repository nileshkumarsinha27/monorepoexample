import styled from '@emotion/styled';
import React, { forwardRef, ReactNode } from 'react';

export interface TextProps {
  children: string | ReactNode;
}

const Text = forwardRef<HTMLSpanElement, TextProps>(({ children }: TextProps, ref) => (
  <TextContainer ref={ref}>{children}</TextContainer>
));

export default Text;

Text.displayName = 'Text';

const TextContainer = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
