import { IProduct } from "../types/products";

export const productsApi = (api) => {
    return {
        /**
         * Get all products
         */
        async getAll(): Promise<IProduct[]> {
            return api.get("api/products").then(({ data }) => data);
        },

        /**
         * Get product by ID
         * @return {Promise<Object>}
         */
        async getOne(id: string | number): Promise<IProduct> {
            return api.get(`api/products/${id}`).then(({ data }) => data);
        },

        /**
         * Create product
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return api.post("api/products", { data }).then(({ data }) => data);
        },

        /**
         * Update product
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return api.put("api/products", { data }).then(({ data }) => data);
        },

        /**
         * Delete product by ID
         * @return {Promise<Object>}
         */
        async delete(id: string | number) {
            return api.delete(`api/products/${id}`).then(({ data }) => data);
        },
    };
};
