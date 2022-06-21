import { defineStore } from "pinia";
import { $api } from "@/api";
import { Article } from "@/types/articles";

export const useArticlesStore = defineStore("articlesStore", {
    state: () => ({
        articles: [] as Article[],
    }),

    actions: {
        getArticles() {
            return $api.articles.getAll().then((response: Article[]) => {
                this.articles = response;
            });
        },
    },
});
