import type React from 'react';
import { memo } from 'react';
import { useMaskStore } from '../../stores/maskStore';
import { usePostsStore } from '../../stores/postsStore';

const Mask: React.FC = () => {
  const show = useMaskStore((s) => s.show);
  const setShow = useMaskStore((s) => s.setShow);
  const clear = usePostsStore((s) => s.clear);

  const handleClear = () => {
    clear();
    setShow(false);
  };

  return (
    <div
      className={show ? 'block' : 'hidden'}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-[100px] leading-[100px] text-xl text-white text-center">
          Are you sure?
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="h-7 border-none text-white cursor-pointer bg-red-600 hover:opacity-80 transition-opacity duration-300 px-4"
        >
          Sure
        </button>
        <button
          type="button"
          onClick={() => setShow(false)}
          className="h-7 border-none text-white cursor-pointer bg-gray-600 hover:opacity-80 transition-opacity duration-300 px-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default memo(Mask);
