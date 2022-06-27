import { defineStore } from "pinia";
import { $api } from "@/api";
import { Review } from "@/types/reviews";

interface StoreState {
    reviews: Review[];
    isLoadingReviews: boolean;
}

export const useReviewsStore = defineStore("reviewsStore", {
    state: (): StoreState => ({
        reviews: [],
        isLoadingReviews: false,
    }),

    actions: {
        createReview(review: Review) {
            return $api.reviews.create(review).then((response: Review) => {
                this.reviews.push(response);
            });
        },
        getReviews() {
            this.isLoadingReviews = true;
            return $api.reviews.getAll().then((response: Review[]) => {
                this.reviews = response;
                this.isLoadingReviews = false;
            });
        },
    },
});
