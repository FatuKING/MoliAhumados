import { create } from "zustand";

export const useData = create((set) => ({
  data: {},
  categories: [],
  loading: true, 
  setData: async () => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwFxJ5Wtr_CauwvyYRtKtoGyZAeZWBW2TtVAXC96BSG9-1sJ_9LFgasIvvekViGt1f_/exec")
      const data = await response.json()
      const categories = Object.keys(data)
      console.log(categories)
      set({ data, categories, loading: false }) 
    } catch (error) {
      console.error("Error fetching data:", error)
      set({ loading: false }) 
    }
  } 
}))