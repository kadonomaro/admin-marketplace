import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initApi } from "./api";
import "@/assets/scss/index.scss";

const app = createApp(App);

app.use(router).mount("#app");
app.provide("$api", initApi("http://localhost:8000"));
