import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import { initApi } from "@/api";
import "@/assets/scss/index.scss";
import ThePreloader from "@/components/ThePreloader.vue";

const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
app.component("the-preloader", ThePreloader);

/*
http://localhost:8000
https://api-marketplace-pi.vercel.app
 */
app.provide("$api", initApi("https://api-marketplace-pi.vercel.app"));
