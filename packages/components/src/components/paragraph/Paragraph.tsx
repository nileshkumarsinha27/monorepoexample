import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import { TextProps } from '../text/Text';

export interface ParagraphProps extends TextProps {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children }: ParagraphProps, ref) => <Para ref={ref}>{children}</Para>
);

export default Paragraph;
Paragraph.displayName = 'Paragraph';

const Para = styled.p``;
