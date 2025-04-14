import { create } from "zustand";

export const useData = create((set) => ({
  data: {},
  categories: [],
  loading: true, 
  setData: async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_PRODUCTS)
      const data = await response.json()
      const categories = Object.keys(data)
      console.log(categories)
      set({ data, categories, loading: false }) 
    } catch (error) {
      console.error("Error fetching data:", error)
      set({ loading: false }) 
    }
  } 
}));