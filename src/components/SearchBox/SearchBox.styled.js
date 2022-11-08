import styled from 'styled-components';

export const Input = styled.input`
  margin-right: 10px;
  height: 20px;
  padding-left: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export const FormButton = styled.button`
  height: 20px;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 0px 25px;
  background: #47a8f5;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #000;
    background-color: #ecf0f4;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;
