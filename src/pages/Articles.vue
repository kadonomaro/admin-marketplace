<script setup>
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const $api = inject("$api");
    const articles = ref([]);

    onMounted(() => {
        $api.articles.getAll().then((response) => {
            articles.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Статьи">
        <content-table :entities="articles"></content-table>
    </content-wrapper>
</template>
