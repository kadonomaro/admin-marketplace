import { defineStore } from "pinia";
import { $api } from "@/api";
import { Page } from "@/types/pages";

interface StoreState {
    pages: Page[];
    isLoadingPages: boolean;
}

export const usePagesStore = defineStore("pagesStore", {
    state: (): StoreState => ({
        pages: [],
        isLoadingPages: false,
    }),

    actions: {
        createPage(page: Page) {
            return $api.pages.create(page).then((response: Page) => {
                this.pages.push(page);
            });
        },
        getPages() {
            this.isLoadingPages = true;
            return $api.pages.getAll().then((response: Page[]) => {
                this.pages = response;
                this.isLoadingPages = false;
            });
        },
    },
});
