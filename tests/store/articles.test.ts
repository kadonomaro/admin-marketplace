import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeAll, beforeEach, afterEach } from "vitest";
import { useArticlesStore } from "../../src/store/articles";

const $api = {
    articles: {
        create() {
            console.log("create mock");
        },
    },
};

beforeAll(() => {
    setActivePinia(createPinia());
});

describe("useArticlesStore", () => {
    let store: ReturnType<typeof useArticlesStore>;

    beforeEach(() => {
        store = useArticlesStore();
    });

    afterEach(() => {
        store.$reset();
    });

    test("create store", () => {
        expect(store).toBeDefined();
    });

    test("initialize with empty state", () => {
        expect(store.articles).toEqual([]);
        expect(store.isLoadingArticles).toEqual(false);
    });

    test("change loading state", () => {
        store.getArticles();
        expect(store.isLoadingArticles).toEqual(true);
    });
});
