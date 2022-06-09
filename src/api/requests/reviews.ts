import { AxiosInstance } from "axios";
import { Review } from "@/types/reviews";

export class ReviewsApi {
    private api: AxiosInstance;
    private url: string;
    constructor(api: AxiosInstance) {
        this.api = api;
        this.url = "api/reviews";
    }

    /**
     * Get all reviews
     */
    async getAll() {
        return await this.api.get<Review[]>(this.url).then(({ data }) => data);
    }

    /**
     * Create review
     */
    async create(review: Partial<Review>) {
        return await this.api.post<Review>(this.url, review).then(({ data }) => data);
    }

    /**
     * Update review
     */
    async update(review: Partial<Review>) {
        return await this.api.put<Review>(this.url, review).then(({ data }) => data);
    }

    /**
     * Delete review by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Review>(`${this.url}/${id}`).then(({ data }) => data);
    }
}
