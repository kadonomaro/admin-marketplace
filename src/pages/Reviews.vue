<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useReviewsStore } from "@/store/reviews";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const reviewsStore = useReviewsStore();
    const { reviews } = storeToRefs(reviewsStore);
    const { getReviews } = reviewsStore;

    const isLoading = ref(true);

    onMounted(() => {
        if (reviews.value.length === 0) {
            getReviews().then(() => {
                isLoading.value = false;
            });
        }
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <the-preloader v-if="isLoading" size="lg"></the-preloader>
        <content-table v-else :entities="reviews" name="author"></content-table>
    </content-wrapper>
</template>
