import { IArticle } from "../types/articles";

export const articlesApi = (api) => {
    return {
        /**
         * Get all articles
         */
        async getAll(): Promise<IArticle[]> {
            return await api.get("api/articles").then(({ data }) => data);
        },

        /**
         * Create article
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return await api.post("api/articles", { data }).then(({ data }) => data);
        },

        /**
         * Update article
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return await api.put("api/articles", { data }).then(({ data }) => data);
        },

        /**
         * Delete article by ID
         * @param { String | Number } id
         * @return {Promise<Object>}
         */
        async delete(id) {
            return await api.delete(`api/articles/${id}`).then(({ data }) => data);
        },
    };
};