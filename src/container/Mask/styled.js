import styled from 'styled-components';

export const StyleRoot = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Choose = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

const Btn = styled.button`
  height: 26px;
  border-radius: 0;
  border: none;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms;
  &:hover {
    opacity: 0.8;
    transition: opacity 300ms;
  }
`;

export const Submit = Btn.extend`
  background-color: rgb(206, 75, 52);
`;

export const Cancel = Btn.extend`
  background-color: #515151;
`;

export const Alert = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;
