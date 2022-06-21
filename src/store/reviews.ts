import { defineStore } from "pinia";
import { $api } from "@/api";
import { Review } from "@/types/reviews";

export const useReviewsStore = defineStore("reviewsStore", {
    state: () => ({
        reviews: [] as Review[],
    }),

    actions: {
        getReviews() {
            return $api.reviews.getAll().then((response: Review[]) => {
                this.reviews = response;
            });
        },
    },
});
