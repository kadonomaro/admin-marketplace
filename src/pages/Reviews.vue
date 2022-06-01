<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "../components/ContentTable.vue";
    import ContentWrapper from "../components/ContentWrapper.vue";
    import { Review } from "../api/types/reviews";

    const $api: any = inject("$api");
    const reviews = ref<Review[]>([]);

    onMounted(() => {
        $api.reviews.getAll().then((response: Review[]) => {
            reviews.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <content-table :entities="reviews"></content-table>
    </content-wrapper>
</template>
