<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useReviewsStore } from "@/store/reviews";
    import { FormFields } from "@/types";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";

    const reviewsStore = useReviewsStore();
    const { reviews, isLoadingReviews } = storeToRefs(reviewsStore);
    const { createReview, getReviews } = reviewsStore;

    const fields: FormFields[] = [
        {
            label: "Название",
            name: "name",
            type: "text",
        },
        {
            label: "Имя автора",
            name: "author",
            type: "text",
        },
        {
            label: "Источник",
            name: "source",
            type: "text",
        },
        {
            label: "Текст",
            name: "description",
            type: "text",
        },
    ];

    onMounted(() => {
        if (reviews.value.length === 0) {
            getReviews();
        }
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <the-preloader v-if="isLoadingReviews" size="lg"></the-preloader>
        <content-table v-else :entities="reviews"></content-table>
        <content-create title="Создать отзыв" :fields="fields" @on-create="createReview"></content-create>
    </content-wrapper>
</template>
