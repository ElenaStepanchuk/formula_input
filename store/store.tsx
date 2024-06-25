import { create } from 'zustand';
import { IStoreState } from '@/types/storeState';

const useStore = create<IStoreState>(set => ({
  formula: '',
  setFormula: formula => set({ formula }),
}));

export default useStore;
