import { toast } from "react-hot-toast";
import { Product } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if(existingItem) {
                return toast("Item already in cart.");
            }

            set({ items: [...get().items, data] })
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter(item => item.id !== id)] });
        },
        removeAll: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;