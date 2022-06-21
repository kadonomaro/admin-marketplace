import { defineStore } from "pinia";
import { $api } from "@/api";
import { Product } from "@/types/products";

interface StoreState {
    products: Product[];
    isLoadingProducts: boolean;
}

export const useProductsStore = defineStore("productsStore", {
    state: (): StoreState => ({
        products: [] as Product[],
        isLoadingProducts: false,
    }),

    actions: {
        getProducts() {
            this.isLoadingProducts = true;
            return $api.products.getAll().then((response: Product[]) => {
                this.products = response;
                this.isLoadingProducts = false;
            });
        },
    },
});
