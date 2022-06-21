import { defineStore } from "pinia";
import { initApi } from "@/api";
import { Article } from "@/types/articles";
import { Page } from "@/types/pages";
import { Product } from "@/types/products";
import { Review } from "@/types/reviews";

const $api = initApi("https://api-marketplace-pi.vercel.app");

export const useMainStore = defineStore("mainStore", {
    state: () => ({
        articles: [] as Article[],
        pages: [] as Page[],
        products: [] as Product[],
        reviews: [] as Review[],
    }),

    actions: {
        getArticles() {
            return $api.articles.getAll().then((response: Article[]) => {
                this.articles = response;
            });
        },
    },
});
