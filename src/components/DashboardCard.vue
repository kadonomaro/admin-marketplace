<script setup lang="ts">
    const props = defineProps({
        card: {
            type: Object,
            default: () => ({}),
        },
    });
</script>

<template>
    <router-link :to="{ name: card.route }" class="dashboard-card">
        <div class="dashboard-card__title">{{ card.title }}</div>
    </router-link>
</template>

<style lang="scss">
    .dashboard-card {
        display: block;
        padding: 12px;
        color: $primary-text;
        text-decoration: none;
        border: 2px solid transparent;
        border-radius: 20px;
        box-shadow: 0 0 25px #f2f2f5;
        transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
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

    .dashboard-card__title {
        font-weight: 600;
    }
</style>
