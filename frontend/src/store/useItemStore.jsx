import { create } from "zustand";
import { api } from "../api/api";

const useItemStore = create((set) => ({
    items: [],
    getItems: async () => {
        try {
            const res = await api.getItems()
            set({items: res})
        } catch (error) {
            console.error(error)
        }
    }
}))

export default useItemStore