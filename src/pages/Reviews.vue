<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import { Review } from "@/types/reviews";
    import { Api } from "@/api";

    const $api = inject("$api") as Api;
    const reviews = ref<Review[]>([]);

    const isLoading = ref(true);

    onMounted(() => {
        $api.reviews.getAll().then((response: Review[]) => {
            reviews.value = response;
            isLoading.value = false;
        });
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <the-preloader v-if="isLoading" size="lg"></the-preloader>
        <content-table v-else :entities="reviews" name="author"></content-table>
    </content-wrapper>
</template>
