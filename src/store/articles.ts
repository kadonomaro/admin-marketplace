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
        createArticle(article: Article) {
            return $api.articles.create(article).then((response: Article) => {
                this.articles.push(response);
            });
        },
        getArticles() {
            this.isLoadingArticles = true;
            return $api.articles.getAll().then((response: Article[]) => {
                this.articles = response;
                this.isLoadingArticles = false;
            });
        },
    },
});
