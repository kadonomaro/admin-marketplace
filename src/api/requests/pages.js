export const pagesApi = (api) => {
    return {
        /**
         * Get page by slug
         * @param { String } slug
         * @return {Promise<Object>}
         */
        async getOne(slug) {
            return api.get(`api/pages/${slug}`).then(({ data }) => data);
        },

        /**
         * Create page
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return api.post("api/pages", { data }).then(({ data }) => data);
        },

        /**
         * Update page
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return api.put("api/pages", { data }).then(({ data }) => data);
        },

        /**
         * Delete page by ID
         * @param { String | Number } id
         * @return {Promise<Object>}
         */
        async delete(id) {
            return api.put(`api/pages${id}`).then(({ data }) => data);
        },
    };
};
