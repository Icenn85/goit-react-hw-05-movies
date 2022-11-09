import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.main`
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  /* color: blue; */
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
