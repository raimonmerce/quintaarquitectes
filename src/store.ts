import { create } from 'zustand'
import type { PageType } from './types';
interface Store {
  page: PageType;
  setPage: (page: PageType) => void;
  project: string | null;
  setProject: (project: string | null) => void;
  landingVisible: boolean;
  setLandingVisible: (landingVisible: boolean) => void;
}

const useStore = create<Store>((set) => ({
  page: 'project',
  setPage: (page) => set(() => ({ page })),
  project: null,
  setProject: (project) => set(() => ({ project })),
  landingVisible: true,
  setLandingVisible: (landingVisible) => set(() => ({ landingVisible })),
}));

export default useStore;