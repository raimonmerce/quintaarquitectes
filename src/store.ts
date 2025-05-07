import { create } from 'zustand'

type Page = 'project' | 'contact' | 'about';

interface Store {
  page: Page;
  setPage: (page: Page) => void;
}

const useStore = create<Store>((set) => ({
  page: 'project',
  setPage: (page) => set(() => ({ page })),
}));

export default useStore;