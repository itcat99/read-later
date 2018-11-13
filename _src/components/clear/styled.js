import styled from 'styled-components';

const ClearBtn = styled.button`
  flex-grow: 5;
  border: none;
  background: rgb(206, 75, 52);
  color: #fff;
  padding: 4px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transition: opacity 300ms;
  }
`;

export default ClearBtn;
