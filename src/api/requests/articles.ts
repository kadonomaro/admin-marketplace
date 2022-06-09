import { AxiosInstance } from "axios";
import { Article } from "@/types/articles";

export class ArticlesApi {
    private api: AxiosInstance;
    private url: string;
    constructor(api: AxiosInstance) {
        this.api = api;
        this.url = "api/articles";
    }

    /**
     * Get all articles
     */
    async getAll() {
        return await this.api.get<Article[]>(this.url).then(({ data }) => data);
    }

    /**
     * Create article
     */
    async create(article: Partial<Article>) {
        return await this.api.post<Article>(this.url, article).then(({ data }) => data);
    }

    /**
     * Update article
     */
    async update(article: Partial<Article>) {
        return await this.api.put<Article>(this.url, article).then(({ data }) => data);
    }

    /**
     * Delete article by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Article>(`${this.url}/${id}`).then(({ data }) => data);
    }
}
