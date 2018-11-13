import styled from 'styled-components';

export const StyleRoot = styled.section`
  display: ${porps => (porps.isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #eee;
  flex-direction: column;
  z-index: 9;
  header {
    font-size: 20px;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

export const List = styled.ul`
  flex-grow: 1;
`;

export const Btn = styled.button`
  flex-grow: 1;
  height: 26px;
  border-radius: 0;
  border: none;
  background-color: rgba(44, 44, 44, 0.5);
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 300ms;
  &:hover {
    opacity: 0.5;
    transition: opacity 300ms;
  }
`;

export const Actions = styled.div`
  display: flex;
  ${Btn};
`;

export const ResetBtn = styled(Btn)`
  background-color: rgb(75, 52, 206);
`;

export const SaveBtn = styled(Btn)`
  background-color: rgb(206, 75, 52);
`;
