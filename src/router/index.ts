import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";
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
export default function () {
    //@ts-ignore
    const routerHistory = !import.meta.env.SSR ? createWebHistory() : createMemoryHistory();

    return createRouter({
        history: routerHistory,
        routes
    })
}
