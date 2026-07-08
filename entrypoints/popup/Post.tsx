import type React from 'react';
import { memo, useCallback, useEffect, useRef } from 'react';

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
        className={show ? 'flex' : 'hidden'}
        style={{
          position: 'relative',
          height: 20,
          alignItems: 'center',
          fontSize: '14px',
          background: '#fff',
          padding: '6px 12px',
          transition: 'background 200ms',
        }}
      >
        <img
          ref={iconRef}
          src={imgsrc}
          alt={title}
          onLoad={handleLoad}
          className="h-full mr-1 min-w-[20px]"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className="flex-1 mr-1 whitespace-nowrap overflow-hidden text-ellipsis no-underline text-[#6e6e6e] text-[13px] focus:outline-none focus:text-[#4d4d4d] active:text-[#9e9e9e]"
        >
          {title}
        </a>
        <button
          type="button"
          onClick={() => remove(id)}
          aria-label={`Remove ${title}`}
          className="min-w-[14px] h-[14px] border-none bg-transparent cursor-pointer p-0 opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: "url('../icons/close.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        />
      </li>
    );
  },
);

export default Post;
