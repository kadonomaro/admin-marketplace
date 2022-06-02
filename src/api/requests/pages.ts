import { AxiosInstance } from "axios";
import { Page } from "@/types/pages";

export class PagesApi {
    private api: AxiosInstance;
    constructor(api: AxiosInstance) {
        this.api = api;
    }

    /**
     * Get all pages
     */
    async getAll() {
        return await this.api.get<Page[]>("api/pages").then(({ data }) => data);
    }

    /**
     * Get page by slug
     */
    async getOne(slug: string) {
        return await this.api.get<Page>(`api/pages/${slug}`).then(({ data }) => data);
    }

    /**
     * Create page
     */
    async create(page: Partial<Page>) {
        return await this.api.post<Page>("api/pages", { data: page }).then(({ data }) => data);
    }

    /**
     * Update page
     */
    async update(page: Partial<Page>) {
        return await this.api.put<Page>("api/pages", { data: page }).then(({ data }) => data);
    }

    /**
     * Delete page by ID
     */
    async delete(id: string | number) {
        return await this.api.put<Page>(`api/pages${id}`).then(({ data }) => data);
    }
}
