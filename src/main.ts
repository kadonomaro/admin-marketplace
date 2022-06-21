import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/scss/index.scss";
import ThePreloader from "@/components/ThePreloader.vue";

const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
app.component("the-preloader", ThePreloader);
