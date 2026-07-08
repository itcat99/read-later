import type React from 'react';
import { memo, useCallback, useRef } from 'react';

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
    <div className="relative w-32 h-6 border border-gray-300 dark:border-gray-600 rounded px-1.5 group">
      <input
        type="text"
        placeholder="search..."
        ref={inputRef}
        onInput={handleInput}
        className="w-full h-full border-none p-0 text-xs bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
      />
      <button
        type="button"
        onClick={handleClear}
        aria-label="Clear search"
        className="absolute min-w-[14px] h-[14px] top-1/2 right-1.5 -translate-y-1/2 opacity-0 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-400 border-none bg-transparent cursor-pointer p-0"
        style={{
          backgroundImage: "url('../../icons/close.svg')",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
});

export default Search;
