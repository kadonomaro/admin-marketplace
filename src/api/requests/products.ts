import { AxiosInstance } from "axios";
import { Product } from "@/types/products";

export const productsApi = (api: AxiosInstance) => {
    return {
        /**
         * Get all products
         */
        async getAll() {
            return await api.get<Product[]>("api/products").then(({ data }) => data);
        },

        /**
         * Get product by ID
         * @return {Promise<Object>}
         */
        async getOne(id: string | number) {
            return await api.get<Product>(`api/products/${id}`).then(({ data }) => data);
        },

        /**
         * Create product
         */
        async create(product: Partial<Product>) {
            return await api.post<Product>("api/products", { data: product }).then(({ data }) => data);
        },

        /**
         * Update product
         */
        async update(product: Partial<Product>) {
            return await api.put<Product>("api/products", { data: product }).then(({ data }) => data);
        },

        /**
         * Delete product by ID
         */
        async delete(id: string | number) {
            return await api.delete<Product>(`api/products/${id}`).then(({ data }) => data);
        },
    };
};
