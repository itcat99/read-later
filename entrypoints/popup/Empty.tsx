import type React from 'react';
import { memo } from 'react';

const Empty: React.FC = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-400 dark:text-gray-500 select-none">
      <svg
        className="w-12 h-12 opacity-30"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <title>Empty bookmark list</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      <p className="text-sm">Empty list.</p>
      <p className="text-xs">Right-click a page and choose &quot;read later&quot;.</p>
    </div>
  );
});

export default Empty;
