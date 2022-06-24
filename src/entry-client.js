import App from "./App.vue";
import { createApp } from "vue";
import createRouter from "@/router";
import { createPinia } from "pinia";
import { isPromise } from "./utils";
import "@/assets/scss/index.scss";
import ThePreloader from "@/components/ThePreloader.vue";

const router = createRouter();
const store = createPinia();
const app = createApp(App);

app.use(router).use(store);
app.component("the-preloader", ThePreloader);

router.beforeResolve((to, from, next) => {
    let diffed = false;
    const matched = router.resolve(to).matched;
    const prevMatched = router.resolve(from).matched;

    if (from && !from.name) {
        return next();
    }
    const activated = matched.filter((c, i) => {
        return diffed || (diffed = prevMatched[i] !== c);
    });
    if (!activated.length) {
        return next();
    }
    const matchedComponents = [];
    matched.map((route) => {
        matchedComponents.push(...Object.values(route.components));
    });
    const asyncDataFuncs = matchedComponents.map((component) => {
        const asyncData = component.asyncData || null;
        if (asyncData) {
            const config = {
                store,
                route: to,
            };
            if (isPromise(asyncData) === false) {
                return Promise.resolve(asyncData(config));
            }
            return asyncData(config);
        }
    });
    try {
        Promise.all(asyncDataFuncs).then(() => {
            next();
        });
    } catch (err) {
        next(err);
    }
});

if (window.__INITIAL_STATE__) {
    store.state.value = window.__INITIAL_STATE__;
}
router.isReady().then(() => {
    app.mount("#app", true);
});
