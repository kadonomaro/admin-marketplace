import { AxiosInstance } from "axios";
import { Article } from "../types/articles";

export const articlesApi = (api: AxiosInstance) => {
    return {
        /**
         * Get all articles
         */
        async getAll(): Promise<Article[]> {
            return await api.get("api/articles").then(({ data }) => data);
        },

        /**
         * Create article
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }: any) {
            return await api.post("api/articles", { data }).then(({ data }) => data);
        },

        /**
         * Update article
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }: any) {
            return await api.put("api/articles", { data }).then(({ data }) => data);
        },

        /**
         * Delete article by ID
         * @return {Promise<Object>}
         */
        async delete(id: string | number) {
            return await api.delete(`api/articles/${id}`).then(({ data }) => data);
        },
    };
};
