import { defineStore } from "pinia";
import { $api } from "@/api";
import { Page } from "@/types/pages";

export const usePagesStore = defineStore("pagesStore", {
    state: () => ({
        pages: [] as Page[],
    }),

    actions: {
        getPages() {
            return $api.pages.getAll().then((response: Page[]) => {
                this.pages = response;
            });
        },
    },
});
