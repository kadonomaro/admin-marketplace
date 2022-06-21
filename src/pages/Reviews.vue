<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useReviewsStore } from "@/store/reviews";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const reviewsStore = useReviewsStore();
    const { reviews, isLoadingReviews } = storeToRefs(reviewsStore);
    const { getReviews } = reviewsStore;

    onMounted(() => {
        if (reviews.value.length === 0) {
            getReviews();
        }
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <the-preloader v-if="isLoadingReviews" size="lg"></the-preloader>
        <content-table v-else :entities="reviews" name="author"></content-table>
    </content-wrapper>
</template>
