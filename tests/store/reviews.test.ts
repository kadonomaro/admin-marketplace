import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeAll, beforeEach, afterEach } from "vitest";
import { useReviewsStore } from "../../src/store/reviews";

beforeAll(() => {
    setActivePinia(createPinia());
});

describe("useArticlesStore", () => {
    let store: ReturnType<typeof useReviewsStore>;

    beforeEach(() => {
        store = useReviewsStore();
    });

    afterEach(() => {
        store.$reset();
    });

    test("create store", () => {
        expect(store).toBeDefined();
    });

    test("initialize with empty state", () => {
        expect(store.reviews).toEqual([]);
        expect(store.isLoadingReviews).toEqual(false);
    });

    test("change loading state", () => {
        store.getReviews();
        expect(store.isLoadingReviews).toEqual(true);
    });
});
