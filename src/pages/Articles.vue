<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import { Article } from "@/types/articles";
    import { Api } from "@/api";

    const $api = inject("$api") as Api;
    const articles = ref<Article[]>([]);

    onMounted(() => {
        $api.articles.getAll().then((response: Article[]) => {
            articles.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Статьи">
        <content-table :entities="articles"></content-table>
    </content-wrapper>
</template>
