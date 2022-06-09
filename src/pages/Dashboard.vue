<script setup lang="ts">
    import { onMounted, inject } from "vue";
    import DashboardCard from "@/components/DashboardCard.vue";

    const cards = [
        { title: "Страницы", route: "Pages" },
        { title: "Товары", route: "Products" },
        { title: "Статьи", route: "Articles" },
        { title: "Отзывы", route: "Reviews" },
    ];
    onMounted(() => {
        const $api = inject("$api");
    });
</script>

<template>
    <div class="dashboard">
        <div class="dashboard__cards">
            <div v-for="card in cards" :key="card.route" class="dashboard__card">
                <dashboard-card :card="card"></dashboard-card>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .dashboard__cards {
        display: flex;
        margin: 0 -12px;
    }

    .dashboard__card {
        flex-basis: 25%;
        max-width: 25%;
        padding: 0 12px;
    }
</style>
