import { AxiosInstance } from "axios";
import { Review } from "@/types/reviews";

export const reviewsApi = (api: AxiosInstance) => {
    return {
        /**
         * Get all reviews
         */
        async getAll() {
            return await api.get<Review[]>("api/reviews").then(({ data }) => data);
        },

        /**
         * Create review
         */
        async create(review: Partial<Review>) {
            return await api.post<Review>("api/reviews", { data: review }).then(({ data }) => data);
        },

        /**
         * Update review
         */
        async update(review: Partial<Review>) {
            return await api.put<Review>("api/reviews", { data: review }).then(({ data }) => data);
        },

        /**
         * Delete review by ID
         */
        async delete(id: string | number) {
            return await api.delete<Review>(`api/reviews/${id}`).then(({ data }) => data);
        },
    };
};
