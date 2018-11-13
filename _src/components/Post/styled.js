import { global } from '../../_vars';
import styled from 'styled-components';

export const Icon = styled.img`
  height: 100%;
  margin-right: 4px;
  min-width: 20px;
`;
export const Link = styled.a`
  flex-grow: 1;
  margin-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: ${global.fontColor};
  font-size: 13px;
  &:focus {
    outline: none;
    color: #4d4d4d;
  }
  &:active {
    color: #9e9e9e;
  }
`;

export const RemoveBtn = styled.span`
  min-width: 14px;
  height: 14px;
  background: url('../icons/close.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 500ms;
  &:hover {
    opacity: 1;
    transition: opacity 500ms;
  }
`;
export const StyledRoot = styled.li`
  position: relative;
  display: ${props => (props.show ? 'flex' : 'none')};
  height: 20px;
  align-items: center;
  font-size: ${global.fontSize};
  background: ${global.bgColor};
  opacity: 1;
  padding: 6px 12px;
  transition: background 200ms;
  &::before {
    position: absolute;
    content: '';
    display: block;
    height: 100%;
    width: 6px;
    top: 0;
    left: 0;
    background-color: rgb(206, 75, 52);
    opacity: 0;
    transition: opacity 400ms;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: background 400ms;
    &::before {
      opacity: 1;
      transition: opacity 400ms;
    }
    ${RemoveBtn} {
      transition: opacity 500ms;
      opacity: 0.5;
    }
  }
`;
