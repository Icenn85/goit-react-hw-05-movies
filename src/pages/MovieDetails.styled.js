import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddInfoList = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #555;
  ul {
    padding-left: 20px;
  }
  li:not(:last-child) {
    margin-bottom: 5px;
  }

  a:hover {
    color: #f32160;
  }
`;

export const LinkItem = styled(Link)`
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: #f32160;
  }
`;
