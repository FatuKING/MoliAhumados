import { create } from "zustand";

export const useData = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
  error: null,
  setError: (error) => set({ error }),
}));