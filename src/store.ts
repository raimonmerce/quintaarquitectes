import { create } from 'zustand'
import type { PageType } from './types';
interface Store {
  page: PageType;
  setPage: (page: PageType) => void;
  landingVisible: boolean;
  setLandingVisible: (landingVisible: boolean) => void;
}

const useStore = create<Store>((set) => ({
  page: 'project',
  setPage: (page) => set(() => ({ page })),
  landingVisible: true,
  setLandingVisible: (landingVisible) => set(() => ({ landingVisible })),
}));

export default useStore;