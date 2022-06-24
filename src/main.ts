import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import createRouter from "@/router";
import "@/assets/scss/index.scss";
import ThePreloader from "@/components/ThePreloader.vue";

export function createApp() {
    const app = createSSRApp(App);
    const router = createRouter();
    const store = createPinia();
    app.use(router).use(store);
    app.component("ThePreloader", ThePreloader);
    return { app, router, store };
}
