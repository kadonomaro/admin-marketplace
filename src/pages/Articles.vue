<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useArticlesStore } from "@/store/articles";
    import { FormFields } from "@/types";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";

    const articlesStore = useArticlesStore();
    const { articles, isLoadingArticles } = storeToRefs(articlesStore);
    const { createArticle, getArticles } = articlesStore;

    const fields: FormFields[] = [
        {
            label: "Название",
            name: "name",
            type: "text",
        },
        {
            label: "Источник",
            name: "source",
            type: "text",
        },
        {
            label: "Текст",
            name: "text",
            type: "text",
        },
    ];

    onMounted(() => {
        if (articles.value.length === 0) {
            getArticles();
        }
    });
</script>

<template>
    <content-wrapper title="Статьи">
        <the-preloader v-if="isLoadingArticles" size="lg"></the-preloader>
        <content-table v-else :entities="articles"></content-table>
        <content-create title="Создать статью" :fields="fields" @on-create="createArticle"></content-create>
    </content-wrapper>
</template>
