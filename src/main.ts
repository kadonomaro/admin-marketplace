import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { initApi } from "@/api";
import "@/assets/scss/index.scss";

const app = createApp(App);

app.use(router).mount("#app");

/*
http://localhost:8000
https://api-marketplace-pi.vercel.app
 */
app.provide("$api", initApi("https://api-marketplace-pi.vercel.app"));
