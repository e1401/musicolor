import { create } from 'zustand';

export interface MusicolorState {
    keyword: string;
    setKeyword: (keyword: string) => void;
    removeKeyword: () => void;
}

export const useMusicolorStore = create<MusicolorState>((set) => ({
    // State
    keyword: '',
    // Actions
    setKeyword: (keyword: string) => set({ keyword }),
    removeKeyword: () => set({ keyword: '' }),
}));
