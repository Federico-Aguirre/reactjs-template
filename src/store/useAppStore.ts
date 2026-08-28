import { create } from 'zustand';

interface AppState {
  // Estado
  isSidebarOpen: boolean;
  isLoadingGlobal: boolean;

  // Acciones
  toggleSidebar: () => void;
  setLoadingGlobal: (loading: boolean) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Valores iniciales
  isSidebarOpen: false,
  isLoadingGlobal: false,

  // Acciones
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setLoadingGlobal: (loading) => set({ isLoadingGlobal: loading }),
  reset: () => set({ isSidebarOpen: false, isLoadingGlobal: false }),
}));
