import { create } from "zustand";
import { persist } from 'zustand/middleware'; 


interface UiState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export const useUiStore = create<UiState>()(
    persist(
        (set) => ({
            isSidebarOpen: false,
            toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
        })
        ,{
            name:"ui-storage" // name of item in localstorage
        }
    ))