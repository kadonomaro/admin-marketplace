<script setup lang="ts">
import {onMounted, onServerPrefetch, ref} from "vue";
    import { storeToRefs } from "pinia";
    import { useArticlesStore } from "@/store/articles";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const articlesStore = useArticlesStore();
    const { articles, isLoadingArticles } = storeToRefs(articlesStore);
    const { getArticles } = articlesStore;

    const title = ref("");

    onMounted(() => {
        if (articles.value.length === 0) {
            getArticles();
        }
    });

    onServerPrefetch(() => {
        title.value = "Статьи";
        // getArticles();
    });
</script>

<template>
    <content-wrapper :title="title">
        <the-preloader v-if="isLoadingArticles" size="lg"></the-preloader>
        <content-table v-else :entities="articles"></content-table>
    </content-wrapper>
</template>
