import { defineStore } from "pinia";
import { $api } from "@/api";
import { Product } from "@/types/products";

interface StoreState {
    products: Product[];
    isLoadingProducts: boolean;
}

export const useProductsStore = defineStore("productsStore", {
    state: (): StoreState => ({
        products: [],
        isLoadingProducts: false,
    }),

    actions: {
        createProduct(product: Product) {
            $api.products.create(product).then((response: Product) => {
                this.products.push(product);
            });
        },
        getProducts() {
            this.isLoadingProducts = true;
            return $api.products.getAll().then((response: Product[]) => {
                this.products = response;
                this.isLoadingProducts = false;
            });
        },
    },
});
