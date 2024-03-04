import create from 'zustand';
import { IUser } from '../api/types';

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  currentCluster: string;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  setCurrentCluster: (clusterId: string) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  currentCluster: null,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setCurrentCluster: (clusterId) => set((state) => ({ ...state, currentCluster: clusterId })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
}));

export default useStore
