import { AxiosInstance } from "axios";
import { Article } from "@/types/articles";

export const articlesApi = (api: AxiosInstance) => {
    return {
        /**
         * Get all articles
         */
        async getAll() {
            return await api.get<Article[]>("api/articles").then(({ data }) => data);
        },

        /**
         * Create article
         */
        async create(article: Partial<Article>) {
            return await api.post<Article>("api/articles", { data: article }).then(({ data }) => data);
        },

        /**
         * Update article
         */
        async update(article: Partial<Article>) {
            return await api.put<Article>("api/articles", { data: article }).then(({ data }) => data);
        },

        /**
         * Delete article by ID
         */
        async delete(id: string | number) {
            return await api.delete<Article>(`api/articles/${id}`).then(({ data }) => data);
        },
    };
};
