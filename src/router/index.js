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
        path: "/content",
        name: "Content",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/Content.vue"),
    },
    {
        path: "/pages",
        name: "Pages",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/Pages.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
