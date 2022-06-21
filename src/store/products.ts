import { defineStore } from "pinia";
import { $api } from "@/api";
import { Product } from "@/types/products";

export const useProductsStore = defineStore("productsStore", {
    state: () => ({
        products: [] as Product[],
    }),

    actions: {
        getProducts() {
            return $api.products.getAll().then((response: Product[]) => {
                this.products = response;
            });
        },
    },
});
