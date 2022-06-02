<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import { Article } from "@/types/articles";
    import { Api } from "@/api";

    const $api = inject("$api") as Api;
    const articles = ref<Article[]>([]);

    const isLoading = ref(true);

    onMounted(() => {
        $api.articles.getAll().then((response: Article[]) => {
            articles.value = response;
            isLoading.value = false;
        });
    });
</script>

<template>
    <content-wrapper title="Статьи">
        <the-preloader v-if="isLoading || true" size="lg"></the-preloader>
        <content-table v-else :entities="articles"></content-table>
    </content-wrapper>
</template>
