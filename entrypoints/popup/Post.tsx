import type React from 'react';
import { memo, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { globalVars } from '../../lib/_vars';

const StyledRoot = styled.li<{ $show: boolean }>`
  position: relative;
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  height: 20px;
  align-items: center;
  font-size: ${globalVars.fontSize};
  background: ${globalVars.bgColor};
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
  }
`;

const Icon = styled.img`
  height: 100%;
  margin-right: 4px;
  min-width: 20px;
`;

const Link = styled.a`
  flex-grow: 1;
  margin-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: ${globalVars.fontColor};
  font-size: 13px;
  &:focus {
    outline: none;
    color: #4d4d4d;
  }
  &:active {
    color: #9e9e9e;
  }
`;

const RemoveBtn = styled.span`
  min-width: 14px;
  height: 14px;
  background: url('../icons/close.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 500ms;
  ${StyledRoot}:hover & {
    opacity: 0.5;
    transition: opacity 500ms;
  }
  &:hover {
    opacity: 1;
  }
`;

interface PostProps {
  imgsrc: string;
  title: string;
  url: string;
  id: string;
  show: boolean;
  remove: (id: string) => void;
  defaultImg: string;
  timeout: number;
}

const Post: React.FC<PostProps> = memo(
  ({ imgsrc, title, url, id, show, remove, defaultImg, timeout }) => {
    const iconRef = useRef<HTMLImageElement>(null);
    const completeRef = useRef(false);

    const setIconTimeout = useCallback(() => {
      setTimeout(() => {
        if (!completeRef.current && iconRef.current) {
          iconRef.current.src = defaultImg;
        }
      }, timeout || 3000);
    }, [defaultImg, timeout]);

    useEffect(() => {
      if (iconRef.current) {
        completeRef.current = iconRef.current.complete;
      }
      setIconTimeout();
    }, [setIconTimeout]);

    const handleLoad = () => {
      completeRef.current = true;
    };

    return (
      <StyledRoot $show={show}>
        <Icon ref={iconRef} src={imgsrc} alt={title} onLoad={handleLoad} />
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
        <RemoveBtn onClick={() => remove(id)} />
      </StyledRoot>
    );
  },
);

export default Post;
