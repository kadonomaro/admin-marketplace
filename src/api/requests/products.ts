import { AxiosInstance } from "axios";
import { Product } from "@/types/products";

export class ProductsApi {
    private api: AxiosInstance;
    private url: string;
    constructor(api: AxiosInstance) {
        this.api = api;
        this.url = "api/products";
    }

    /**
     * Get all products
     */
    async getAll() {
        return await this.api.get<Product[]>(this.url).then(({ data }) => data);
    }

    /**
     * Get product by ID
     */
    async getOne(id: string | number) {
        return await this.api.get<Product>(`${this.url}/${id}`).then(({ data }) => data);
    }

    /**
     * Create product
     */
    async create(product: Partial<Product>) {
        return await this.api.post<Product>(this.url, product).then(({ data }) => data);
    }

    /**
     * Update product
     */
    async update(product: Partial<Product>) {
        return await this.api.put<Product>(this.url, product).then(({ data }) => data);
    }

    /**
     * Delete product by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Product>(`${this.url}/${id}`).then(({ data }) => data);
    }
}
