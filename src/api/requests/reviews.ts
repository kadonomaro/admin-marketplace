import { IReview } from "../types/reviews";

export const reviewsApi = (api) => {
    return {
        /**
         * Get all reviews
         */
        async getAll(): Promise<IReview> {
            return await api.get("api/reviews").then(({ data }) => data);
        },

        /**
         * Create review
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return await api.post("api/reviews", { data }).then(({ data }) => data);
        },

        /**
         * Update review
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return await api.put("api/reviews", { data }).then(({ data }) => data);
        },

        /**
         * Delete review by ID
         * @return {Promise<Object>}
         */
        async delete(id: string | number) {
            return await api.delete(`api/reviews/${id}`).then(({ data }) => data);
        },
    };
};