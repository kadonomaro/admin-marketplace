import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeAll, beforeEach, afterEach } from "vitest";
import { useProductsStore } from "../../src/store/products";

beforeAll(() => {
    setActivePinia(createPinia());
});

describe("useArticlesStore", () => {
    let store: ReturnType<typeof useProductsStore>;

    beforeEach(() => {
        store = useProductsStore();
    });

    afterEach(() => {
        store.$reset();
    });

    test("create store", () => {
        expect(store).toBeDefined();
    });

    test("initialize with empty state", () => {
        expect(store.products).toEqual([]);
        expect(store.isLoadingProducts).toEqual(false);
    });

    test("change loading state", () => {
        store.getProducts();
        expect(store.isLoadingProducts).toEqual(true);
    });
});
