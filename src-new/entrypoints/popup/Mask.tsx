import React, { memo } from 'react';
import styled from 'styled-components';
import { usePostsStore } from '../../stores/postsStore';
import { useMaskStore } from '../../stores/maskStore';

const StyleRoot = styled.div<{ $show: boolean }>`
  display: ${(props) => (props.$show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Choose = styled.div`
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

const Submit = styled(Btn)`
  background-color: rgb(206, 75, 52);
`;

const Cancel = styled(Btn)`
  background-color: #515151;
`;

const Alert = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const Mask: React.FC = () => {
  const show = useMaskStore((s) => s.show);
  const setShow = useMaskStore((s) => s.setShow);
  const clear = usePostsStore((s) => s.clear);

  const handleClear = () => {
    clear();
    setShow(false);
  };

  return (
    <StyleRoot $show={show}>
      <Alert>
        <Choose>Are you sure?</Choose>
        <Submit onClick={handleClear}>Sure</Submit>
        <Cancel onClick={() => setShow(false)}>Cancel</Cancel>
      </Alert>
    </StyleRoot>
  );
};

export default memo(Mask);
