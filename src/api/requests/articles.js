export const articlesApi = (api) => {
    return {
        /**
         * Get all articles
         * @return {Promise<Object[]>}
         */
        async getAll() {
            return api.get("api/articles").then(({ data }) => data);
        },

        /**
         * Create article
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return api.post("api/articles", { data }).then(({ data }) => data);
        },

        /**
         * Update article
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return api.put("api/articles", { data }).then(({ data }) => data);
        },

        /**
         * Delete article by ID
         * @param { String | Number } id
         * @return {Promise<Object>}
         */
        async delete(id) {
            return api.delete(`api/articles/${id}`).then(({ data }) => data);
        },
    };
};
