import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDiv = styled.div`
  height: 50px;
  background-color: darkblue;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
`;

export const HeaderLink = styled(Link)`
  margin: 10px;
  padding: 5px 5px 0 5px;
  background-color: darkblue;
  text-decoration: none;
  color: white;
  :hover {
    background-color: lightskyblue;
  }
`;
