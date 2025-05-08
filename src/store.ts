import { create } from 'zustand'

type Page = 'project' | 'contact' | 'about';

interface Store {
  page: Page;
  setPage: (page: Page) => void;
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