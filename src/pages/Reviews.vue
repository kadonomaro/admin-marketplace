<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useReviewsStore } from "@/store/reviews";
    import { ComponentType, FormFields } from "@/types";
    import { Review } from "@/types/reviews";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";
    import ContentControls from "@/components/ContentControls.vue";

    const { reviews, isLoadingReviews } = storeToRefs(useReviewsStore());
    const { createReview, getReviews } = useReviewsStore();

    const onCreateProduct = (review: Review) => {
        createReview(review).then(() => {
            component.value = "list";
        });
    };

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

    const component = ref<ComponentType>("list");
    const onSetComponent = (name: ComponentType) => {
        component.value = name;
    };

    onMounted(() => {
        if (reviews.value.length === 0) {
            getReviews();
        }
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <div class="content-wrapper__controls">
            <content-controls :component="component" @on-set-component="onSetComponent"></content-controls>
        </div>

        <template v-if="component === 'list'">
            <the-preloader v-if="isLoadingReviews" size="lg"></the-preloader>
            <content-table v-else :entities="reviews"></content-table>
        </template>

        <template v-if="component === 'create'">
            <content-create title="Создать отзыв" :fields="fields" @on-create="onCreateProduct"></content-create>
        </template>
    </content-wrapper>
</template>

<style lang="scss">
    .content-wrapper__controls {
        margin-bottom: 24px;
    }
</style>
