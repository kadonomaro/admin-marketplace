export const productsApi = (api) => {
    return {
        /**
         * Get all products
         * @return {Promise<Object[]>}
         */
        async getAll() {
            return api.get("api/products").then(({ data }) => data);
        },

        /**
         * Get product by ID
         * @param { String | Number }id
         * @return {Promise<Object>}
         */
        async getOne(id) {
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
         * @param { String | Number } id
         * @return {Promise<Object>}
         */
        async delete(id) {
            return api.delete(`api/products/${id}`).then(({ data }) => data);
        },
    };
};
