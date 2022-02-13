import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "/src/pages/Dashboard.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: Dashboard,
    },
    {
        path: "/about",
        name: "About",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/About.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
