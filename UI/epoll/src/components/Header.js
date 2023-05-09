import React from 'react';
import { HeaderDiv, HeaderLink } from '../styles/headerStyles';

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderLink to="/">All Polls</HeaderLink>
      <HeaderLink to="/newpoll">New Poll</HeaderLink>
    </HeaderDiv>
  );
};

export default Header;
