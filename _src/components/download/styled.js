import styled from 'styled-components';

export const StyleRoot = styled.a.attrs({
  href: props => props.data,
  download: props => props.download,
})`
  text-align: center;
  flex-grow: 1;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-decoration: none;
  padding: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transition: opacity 300ms;
  }
`;
