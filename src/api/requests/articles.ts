import { AxiosInstance } from "axios";
import { Article } from "@/types/articles";

export class ArticlesApi {
    private api: AxiosInstance;
    constructor(api: AxiosInstance) {
        this.api = api;
    }

    /**
     * Get all articles
     */
    async getAll() {
        return await this.api.get<Article[]>("api/articles").then(({ data }) => data);
    }

    /**
     * Create article
     */
    async create(article: Partial<Article>) {
        return await this.api.post<Article>("api/articles", { data: article }).then(({ data }) => data);
    }

    /**
     * Update article
     */
    async update(article: Partial<Article>) {
        return await this.api.put<Article>("api/articles", { data: article }).then(({ data }) => data);
    }

    /**
     * Delete article by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Article>(`api/articles/${id}`).then(({ data }) => data);
    }
}
