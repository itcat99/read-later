import { memo } from 'react';
import { useMaskStore } from '../../stores/maskStore';
import { usePostsStore } from '../../stores/postsStore';

const Mask = memo(() => {
  const show = useMaskStore((s) => s.show);
  const setShow = useMaskStore((s) => s.setShow);
  const clear = usePostsStore((s) => s.clear);

  const handleClear = () => {
    clear();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center">
      <div className="text-center">
        <p className="text-white text-lg mb-4">Are you sure?</p>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={handleClear}
            className="px-5 h-7 border-none text-white text-sm bg-red-500 hover:bg-red-600 cursor-pointer transition-colors duration-200 rounded"
          >
            Sure
          </button>
          <button
            type="button"
            onClick={() => setShow(false)}
            className="px-5 h-7 border-none text-white text-sm bg-gray-500 hover:bg-gray-600 cursor-pointer transition-colors duration-200 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
});

export default Mask;
