import { memo, useCallback, useEffect, useRef } from 'react';
import { HiXMark } from 'react-icons/hi2';

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

const Post = memo(({ imgsrc, title, url, id, show, remove, defaultImg, timeout }: PostProps) => {
  const iconRef = useRef<HTMLImageElement>(null);
  const completeRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const setIconTimeout = useCallback(() => {
    const timer = window.setTimeout(() => {
      if (!completeRef.current && iconRef.current) {
        iconRef.current.src = defaultImg;
      }
    }, timeout || 3000);
    timerRef.current = timer;
  }, [defaultImg, timeout]);

  useEffect(() => {
    if (iconRef.current) {
      completeRef.current = iconRef.current.complete;
    }
    setIconTimeout();

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [setIconTimeout]);

  const handleLoad = () => {
    completeRef.current = true;
  };

  return (
    <li
      className={
        show
          ? 'relative flex items-center h-8 px-3 py-1 group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150'
          : 'hidden'
      }
    >
      {/* left accent bar */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-sm" />

      <img
        ref={iconRef}
        src={imgsrc}
        alt={title}
        onLoad={handleLoad}
        className="h-5 mr-2 min-w-[20px] rounded-sm"
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className="flex-1 mr-2 whitespace-nowrap overflow-hidden text-ellipsis no-underline text-[13px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
      >
        {title}
      </a>
      <button
        type="button"
        onClick={() => remove(id)}
        aria-label={`Remove ${title}`}
        className="opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity duration-200 border-none bg-transparent cursor-pointer p-0 text-gray-400 dark:text-gray-500 hover:text-red-500"
      >
        <HiXMark size={16} />
      </button>
    </li>
  );
});

export default Post;
