import { AxiosInstance } from "axios";
import { Page } from "@/types/pages";

export class PagesApi {
    private api: AxiosInstance;
    private url: string;
    constructor(api: AxiosInstance) {
        this.api = api;
        this.url = "api/pages";
    }

    /**
     * Get all pages
     */
    async getAll() {
        return await this.api.get<Page[]>(this.url).then(({ data }) => data);
    }

    /**
     * Get page by slug
     */
    async getOne(slug: string) {
        return await this.api.get<Page>(`${this.url}/${slug}`).then(({ data }) => data);
    }

    /**
     * Create page
     */
    async create(page: Partial<Page>) {
        return await this.api.post<Page>(this.url, page).then(({ data }) => data);
    }

    /**
     * Update page
     */
    async update(page: Partial<Page>) {
        return await this.api.put<Page>(this.url, page).then(({ data }) => data);
    }

    /**
     * Delete page by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Page>(`${this.url}/${id}`).then(({ data }) => data);
    }
}
