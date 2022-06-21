import { defineStore } from "pinia";
import { $api } from "@/api";
import { Article } from "@/types/articles";

interface StoreState {
    articles: Article[];
    isLoadingArticles: boolean;
}

export const useArticlesStore = defineStore("articlesStore", {
    state: (): StoreState => ({
        articles: [],
        isLoadingArticles: false,
    }),

    actions: {
        getArticles() {
            this.isLoadingArticles = true;
            return $api.articles.getAll().then((response: Article[]) => {
                this.articles = response;
                this.isLoadingArticles = false;
            });
        },
    },
});
