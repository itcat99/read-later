import { global } from '../../_vars';
import styled from 'styled-components';

export const RemoveBtn = styled.span`
  position: absolute;
  min-width: 14px;
  height: 14px;
  opacity: 0;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  transition: opacity 400ms;
  background: url('../../icons/close.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

export const StyleRoot = styled.div`
  position: relative;
  width: 120px;
  height: 24px;
  box-sizing: border-box;
  padding: 2px 6px;
  border: ${global.border};
  border-radius: 3px;
  > input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    &:focus {
      outline: none;
    }
  }

  &:hover ${RemoveBtn} {
    opacity: 0.5;
    transition: opacity 400ms;
  }
`;
