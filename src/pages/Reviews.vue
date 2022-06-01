<script setup>
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const $api = inject("$api");
    const reviews = ref([]);

    onMounted(() => {
        $api.reviews.getAll().then((response) => {
            reviews.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Отзывы">
        <content-table :entities="reviews"></content-table>
    </content-wrapper>
</template>
