import { create } from 'zustand';

interface MaskState {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const useMaskStore = create<MaskState>((set) => ({
  show: false,
  setShow: (show: boolean) => set({ show }),
}));
