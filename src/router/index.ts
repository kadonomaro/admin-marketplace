import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";

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
        path: "/products",
        name: "Products",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/Products.vue"),
    },
    {
        path: "/articles",
        name: "Articles",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/Articles.vue"),
    },
    {
        path: "/articles",
        name: "Articles",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/Articles.vue"),
    },
    {
        path: "/reviews",
        name: "Reviews",
        meta: {
            layout: "Main",
            requiresAuth: true,
        },
        component: () => import("../pages/Reviews.vue"),
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
