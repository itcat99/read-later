import { memo } from 'react';
import { HiBookmark } from 'react-icons/hi2';

const Empty = memo(() => (
  <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-300 dark:text-gray-600 select-none">
    <HiBookmark className="w-10 h-10 opacity-30" />
    <div className="text-center">
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">No saved links yet</p>
      <p className="text-xs text-gray-300 dark:text-gray-600">
        Right-click a page &rarr; &quot;read later&quot;
      </p>
    </div>
  </div>
));

export default Empty;
