<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useArticlesStore } from "@/store/articles";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const articlesStore = useArticlesStore();
    const { articles } = storeToRefs(articlesStore);
    const { getArticles } = articlesStore;

    const isLoading = ref(true);

    onMounted(() => {
        if (articles.value.length === 0) {
            getArticles().then(() => {
                isLoading.value = false;
            });
        }
    });
</script>

<template>
    <content-wrapper title="Статьи">
        <the-preloader v-if="isLoading" size="lg"></the-preloader>
        <content-table v-else :entities="articles"></content-table>
    </content-wrapper>
</template>
