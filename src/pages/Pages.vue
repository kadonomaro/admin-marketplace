<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { usePagesStore } from "@/store/pages";
    import { ComponentType, FormFields } from "@/types";
    import { Page } from "@/types/pages";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";
    import ContentControls from "@/components/ContentControls.vue";

    const pagesStore = usePagesStore();
    const { pages, isLoadingPages } = storeToRefs(pagesStore);
    const { createPage, getPages } = pagesStore;

    const onCreatePage = (page: Page) => {
        createPage(page).then(() => {
            component.value = "list";
        });
    };

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

    const component = ref<ComponentType>("list");
    const onSetComponent = (name: ComponentType) => {
        component.value = name;
    };

    onMounted(() => {
        if (pages.value.length === 0) {
            getPages();
        }
    });
</script>

<template>
    <content-wrapper title="Страницы">
        <div class="content-wrapper__controls">
            <content-controls :component="component" @on-set-component="onSetComponent"></content-controls>
        </div>

        <template v-if="component === 'list'">
            <the-preloader v-if="isLoadingPages" size="lg"></the-preloader>
            <content-table v-else :entities="pages"></content-table>
        </template>
        <template v-if="component === 'create'">
            <content-create title="Создать страницу" :fields="fields" @on-create="onCreatePage"></content-create>
        </template>
    </content-wrapper>
</template>

<style lang="scss">
    .content-wrapper__controls {
        margin-bottom: 24px;
    }
</style>
