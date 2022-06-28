import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/scss/index.scss";
import ThePreloader from "@/components/ThePreloader.vue";
// @ts-ignore
import MadrobotsCheckout from "@madrobotsru/madrobots-checkout";

const app = createApp(App);

app.use(MadrobotsCheckout, {
    store: {},
    url: "https://madrobots.ru",
    ymId: 19955716,
    documents: {
        personalData: "",
    },
});

app.use(router).use(createPinia()).mount("#app");
app.component("the-preloader", ThePreloader);
