import { memo, useCallback, useRef } from 'react';
import { HiXMark } from 'react-icons/hi2';

interface SearchProps {
  search: (keyword: string) => void;
}

const Search = memo(({ search }: SearchProps) => {
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
    <div className="relative w-[120px] h-6 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 group">
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
        className="absolute top-1/2 right-1 -translate-y-1/2 opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity duration-200 border-none bg-transparent cursor-pointer p-0 text-gray-400 dark:text-gray-500"
      >
        <HiXMark size={14} />
      </button>
    </div>
  );
});

export default Search;
