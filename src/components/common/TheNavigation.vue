<script setup>
    const list = [
        { name: "Dashboard", url: "Dashboard" },
        { name: "Content", url: "Content" },
        { name: "Pages", url: "Pages" },
    ];
</script>

<template>
    <nav class="the-navigation">
        <ul class="the-navigation__list">
            <li v-for="(item, index) in list" :key="index" class="the-navigation__item">
                <router-link class="the-navigation__link" exact-active-class="is-active" :to="{ name: item.url }">
                    {{ item.name }}
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
            display: flex;
            align-items: center;
            margin: 0 -6px;
        }
    }

    .the-navigation__item {
        padding: 0 6px;
    }

    .the-navigation__link {
        display: block;
        padding: 8px 12px;
        color: $primary-text;
        text-decoration: none;
        transition: background-color 0.2s ease-in;
        border-radius: 40px;
        &.is-active {
            background-color: #ff9900;
        }
    }
</style>
