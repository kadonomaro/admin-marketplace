<script setup lang="ts">
    import TheIcon from "@/components/TheIcon.vue";

    const list = [
        { title: "Dashboard", url: "Dashboard", icon: "arrow" },
        { title: "Страницы", url: "Pages", icon: "arrow" },
        { title: "Товары", url: "Products", icon: "arrow" },
        { title: "Статьи", url: "Articles", icon: "arrow" },
        { title: "Отзывы", url: "Reviews", icon: "arrow" },
    ];
</script>

<template>
    <nav class="the-navigation">
        <ul class="the-navigation__list">
            <li v-for="(item, index) in list" :key="index" class="the-navigation__item">
                <router-link class="the-navigation__link" exact-active-class="is-active" :to="{ name: item.url }">
                    {{ item.title }}
                    <the-icon :name="item.icon"></the-icon>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-navigation {
    }

    .the-navigation__list {
        @include bp($bp-desktop-sm) {
            margin: 0 -6px;
        }
    }

    .the-navigation__item {
        padding: 0 6px;
        &:not(:last-child) {
            margin-bottom: 4px;
        }
    }

    .the-navigation__link {
        position: relative;
        display: block;
        padding: 14px 24px;
        color: $primary-text;
        text-decoration: none;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
        border-radius: 18px;
        &:hover {
            background-color: $secondary-color;
        }
        &.is-active {
            color: #fff;
            background-color: $primary-color;
            svg {
                stroke: #fff;
            }
        }
        svg {
            position: absolute;
            top: 50%;
            right: 12px;
            width: 24px;
            height: 24px;
            stroke: $primary-color;
            transform: translateY(-50%);
        }
    }
</style>
