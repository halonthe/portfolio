import { create } from "zustand";

interface PixelBgState {
	isPixeled: boolean;
	setPixeled(newState: boolean): void;
}

const usePixelBgStore = create<PixelBgState>()((set) => ({
	isPixeled: false,
	setPixeled: (newState) => set({ isPixeled: newState }),
}));

export default usePixelBgStore;