<script setup lang="ts">
    import { onServerPrefetch, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useArticlesStore } from "@/store/articles";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const articlesStore = useArticlesStore();
    const { articles, isLoadingArticles } = storeToRefs(articlesStore);
    const { getArticles } = articlesStore;

    onServerPrefetch(async () => {
        await getArticles();
    });

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
    </content-wrapper>
</template>
