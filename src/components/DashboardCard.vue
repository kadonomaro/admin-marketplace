<script setup lang="ts">
    const props = defineProps<{
        card: {
            title: string;
            route: string;
            image: string;
        };
    }>();
</script>

<template>
    <router-link :to="{ name: card.route }" class="dashboard-card">
        <img class="dashboard-card__image" :src="`/static/images/dashboard/${card.image}`" alt="" />
        <div class="dashboard-card__title">{{ card.title }}</div>
    </router-link>
</template>

<style lang="scss">
    .dashboard-card {
        position: relative;
        display: block;
        color: $primary-text;
        text-decoration: none;
        border: 2px solid transparent;
        border-radius: $border-radius--lg;
        box-shadow: $box-shadow;
        transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
        overflow: hidden;
        &:hover {
            border-color: $primary-color;
            box-shadow: none;
        }
        &::before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
    }

    .dashboard-card__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .dashboard-card__title {
        position: absolute;
        left: 12px;
        bottom: 12px;
        font-weight: 600;
    }
</style>
