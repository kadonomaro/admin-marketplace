import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";

enum Layouts {
    Main = "MainLayout",
    Auth = "AuthLayout",
}

const routes = [
    {
        path: "/",
        name: "Dashboard",
        meta: {
            layout: Layouts.Main,
            requiresAuth: true,
        },
        component: Dashboard,
    },
    {
        path: "/products",
        name: "Products",
        meta: {
            layout: Layouts.Main,
            requiresAuth: true,
        },
        component: () => import("../pages/Products.vue"),
    },
    {
        path: "/articles",
        name: "Articles",
        meta: {
            layout: Layouts.Main,
            requiresAuth: true,
        },
        component: () => import("../pages/Articles.vue"),
    },
    {
        path: "/articles",
        name: "Articles",
        meta: {
            layout: Layouts.Main,
            requiresAuth: true,
        },
        component: () => import("../pages/Articles.vue"),
    },
    {
        path: "/reviews",
        name: "Reviews",
        meta: {
            layout: Layouts.Main,
            requiresAuth: true,
        },
        component: () => import("../pages/Reviews.vue"),
    },
    {
        path: "/pages",
        name: "Pages",
        meta: {
            layout: Layouts.Main,
            requiresAuth: true,
        },
        component: () => import("../pages/Pages.vue"),
    },
    {
        path: "/auth",
        name: "Auth",
        meta: {
            layout: Layouts.Auth,
            requiresAuth: true,
        },
        component: () => import("../pages/Auth.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
