import { AxiosInstance } from "axios";
import { Review } from "@/types/reviews";

export class ReviewsApi {
    private api: AxiosInstance;
    constructor(api: AxiosInstance) {
        this.api = api;
    }

    /**
     * Get all reviews
     */
    async getAll() {
        return await this.api.get<Review[]>("api/reviews").then(({ data }) => data);
    }

    /**
     * Create review
     */
    async create(review: Partial<Review>) {
        return await this.api.post<Review>("api/reviews", { data: review }).then(({ data }) => data);
    }

    /**
     * Update review
     */
    async update(review: Partial<Review>) {
        return await this.api.put<Review>("api/reviews", { data: review }).then(({ data }) => data);
    }

    /**
     * Delete review by ID
     */
    async delete(id: string | number) {
        return await this.api.delete<Review>(`api/reviews/${id}`).then(({ data }) => data);
    }
}
