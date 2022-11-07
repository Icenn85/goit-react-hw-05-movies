import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-left: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  background-color: #fdfdfd;

  // > nav {
  //   display: flex;
  // }
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #000000;
  margin: 20px auto;

  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    color: #2196f3;
  }

  &.active {
    color: #2196f3;
  }
`;
