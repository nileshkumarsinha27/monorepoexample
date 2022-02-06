import React, { FC } from 'react';
import styled from '@emotion/styled';
import Colors from '../../tokens/Colors';
import Spacings from '../../tokens/Spacings';
import Title from '../title/Title';

export interface HeaderProps {
  appName: string;
}

const Header: FC<HeaderProps> = ({ appName }: HeaderProps) => (
  <HeaderContainer>
    <Title>{appName}</Title>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.header`
  height: 75px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  box-shadow: 0 0 31px 0 ${Colors.boxShadow1};
  align-items: center;
  padding: 0 ${Spacings.medium};
  font-size: ${Spacings.xLarge};
  font-weight: bold;
  justify-content: center;
  color: ${Colors.white};
  background: ${Colors.tealGreen};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;
HeaderContainer.displayName = 'HeaderContainer';
