import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeAll, beforeEach, afterEach } from "vitest";
import { usePagesStore } from "../../src/store/pages";

beforeAll(() => {
    setActivePinia(createPinia());
});

describe("useArticlesStore", () => {
    let store: ReturnType<typeof usePagesStore>;

    beforeEach(() => {
        store = usePagesStore();
    });

    afterEach(() => {
        store.$reset();
    });

    test("create store", () => {
        expect(store).toBeDefined();
    });

    test("initialize with empty state", () => {
        expect(store.pages).toEqual([]);
        expect(store.isLoadingPages).toEqual(false);
    });

    test("change loading state", () => {
        store.getPages();
        expect(store.isLoadingPages).toEqual(true);
    });
});
