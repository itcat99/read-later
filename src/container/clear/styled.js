import styled from 'styled-components';

const ClearBtn = styled.button`
  border: none;
  background: rgb(206, 75, 52);
  color: #fff;
  padding: 6px;
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
