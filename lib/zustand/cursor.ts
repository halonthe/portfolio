import { create } from "zustand";

interface CursorState {
	isHovered: boolean;
	setHovered(newState: boolean): void;
}

const useCursorStore = create<CursorState>()((set) => ({
	isHovered: true,
	setHovered: (newState) => set({ isHovered: newState }),
}));

export default useCursorStore;