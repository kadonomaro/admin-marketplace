<script setup lang="ts">
    import DashboardCard from "@/components/DashboardCard.vue";
    import OptionsApi from "@/components/OptionsApi.vue";

    const cards = [
        { title: "Страницы", route: "Pages", image: "pages.svg" },
        { title: "Товары", route: "Products", image: "products.svg" },
        { title: "Статьи", route: "Articles", image: "articles.svg" },
        { title: "Отзывы", route: "Reviews", image: "reviews.svg" },
    ];

    const onMounted = (state: any) => {
        console.log(state)
    }
</script>

<template>
    <div class="dashboard">
        <options-api title="Options API" @on-mounted="onMounted"></options-api>
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
