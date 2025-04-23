import { create } from "zustand";

export const useData = create((set) => ({
  data: {},
  categories: [],
  loading: true, 
  setData: async () => {
    try {
      const response = await fetch("https://sendmailmembranas202.onrender.com/sendMail")
      const data = await response.json()
      const categories = Object.keys(data)
      set({ data, categories, loading: false }) 
    } catch (error) {
      console.error("Error fetching data:", error)
      set({ loading: false }) 
    }
  } 
}));