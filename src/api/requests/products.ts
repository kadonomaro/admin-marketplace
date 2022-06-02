import { AxiosInstance } from "axios";
import { Product } from "@/types/products";

export class ProductsApi {
    private api: AxiosInstance;
    constructor(api: AxiosInstance) {
        this.api = api;
    }

    /**
     * Get all products
     */
    async getAll() {
        return await this.api.get<Product[]>("api/products").then(({ data }) => data);
    }

    /**
     * Get product by ID
     */
    async getOne(id: string | number) {
        return await this.api.get<Product>(`api/products/${id}`).then(({ data }) => data);
    }

    /**
     * Create product
     */
    async create(product: Partial<Product>) {
        return await this.api.post<Product>("api/products", { data: product }).then(({ data }) => data);
    }

    /**
     * Update product
     */
    async update(product: Partial<Product>) {
        return await this.api.put<Product>("api/products", { data: product }).then(({ data }) => data);
    }

    /**
     * Delete product by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Product>(`api/products/${id}`).then(({ data }) => data);
    }
}
