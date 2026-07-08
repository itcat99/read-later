import type React from 'react';
import { memo, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { globalVars } from '../../lib/vars';

const RemoveBtn = styled.span`
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

const StyleRoot = styled.div`
  position: relative;
  width: 120px;
  height: 24px;
  box-sizing: border-box;
  padding: 2px 6px;
  border: ${globalVars.border};
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

interface SearchProps {
  search: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = memo(({ search }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleInput = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const value = inputRef.current?.value ?? '';
      search(value);
    }, 300);
  }, [search]);

  const handleClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    search('');
  }, [search]);

  return (
    <StyleRoot>
      <input type="text" placeholder="please search..." ref={inputRef} onInput={handleInput} />
      <RemoveBtn onClick={handleClear} />
    </StyleRoot>
  );
});

export default Search;
