<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useArticlesStore } from "@/store/articles";
    import { ComponentType, FormFields } from "@/types";
    import { Article } from "@/types/articles";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";
    import ContentControls from "@/components/ContentControls.vue";

    const articlesStore = useArticlesStore();
    const { articles, isLoadingArticles } = storeToRefs(articlesStore);
    const { createArticle, getArticles } = articlesStore;

    const onCreateArticle = (article: Article) => {
        createArticle(article);
        component.value = "create";
    };

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

    const component = ref<ComponentType>("list");
    const onSetComponent = (name: ComponentType) => {
        component.value = name;
    };

    onMounted(() => {
        if (articles.value.length === 0) {
            getArticles();
        }
    });
</script>

<template>
    <content-wrapper title="Статьи">
        <div class="content-wrapper__controls">
            <content-controls :component="component" @on-set-component="onSetComponent"></content-controls>
        </div>

        <template v-if="component === 'list'">
            <the-preloader v-if="isLoadingArticles" size="lg"></the-preloader>
            <content-table v-else :entities="articles"></content-table>
        </template>

        <template v-if="component === 'create'">
            <content-create title="Создать статью" :fields="fields" @on-create="onCreateArticle"></content-create>
        </template>
    </content-wrapper>
</template>

<style lang="scss">
    .content-controls {
        display: flex;
        margin-bottom: 24px;
    }
</style>
