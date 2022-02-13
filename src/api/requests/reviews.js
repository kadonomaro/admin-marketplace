export const reviewsApi = (api) => {
    return {
        /**
         * Get all reviews
         * @return {Promise<Object[]>}
         */
        async getAll() {
            return api.get("api/reviews").then(({ data }) => data);
        },

        /**
         * Create review
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return api.post("api/reviews", { data }).then(({ data }) => data);
        },

        /**
         * Update review
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return api.put("api/reviews", { data }).then(({ data }) => data);
        },

        /**
         * Delete review by ID
         * @param { String | Number } id
         * @return {Promise<Object>}
         */
        async delete(id) {
            return api.delete(`api/reviews/${id}`).then(({ data }) => data);
        },
    };
};
