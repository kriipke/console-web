import create from 'zustand';
import { IUser } from '../api/types';

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  currentNode: string;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  setCurrentNode: (current: string) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setCurrentNode: (current) => set((state) => ({ ...state, currentNode: current })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
}));

export default useStore;
