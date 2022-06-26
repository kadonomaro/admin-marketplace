<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { usePagesStore } from "@/store/pages";
    import { FormFields } from "@/types";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";

    const pagesStore = usePagesStore();
    const { pages, isLoadingPages } = storeToRefs(pagesStore);
    const { createPage, getPages } = pagesStore;

    const fields: FormFields[] = [
        {
            label: "Символьный код",
            name: "slug",
            type: "text",
        },
        {
            label: "Название",
            name: "name",
            type: "text",
        },
        {
            label: "SEO - Заголовок",
            name: "seo_title",
            type: "text",
        },
        {
            label: "SEO - Описание",
            name: "seo_description",
            type: "text",
        },
        {
            label: "Текст",
            name: "content",
            type: "text",
        },
    ];

    onMounted(() => {
        if (pages.value.length === 0) {
            getPages();
        }
    });
</script>

<template>
    <content-wrapper title="Страницы">
        <the-preloader v-if="isLoadingPages" size="lg"></the-preloader>
        <content-table v-else :entities="pages"></content-table>
        <content-create title="Создать страницу" :fields="fields" @on-create="createPage"></content-create>
    </content-wrapper>
</template>
