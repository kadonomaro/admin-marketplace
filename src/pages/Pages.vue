<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import { Page } from "@/types/pages";
    import { Api } from "@/api";

    const $api = inject("$api") as Api;
    const pages = ref<Page[]>([]);

    onMounted(() => {
        $api.pages.getAll().then((response: Page[]) => {
            pages.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Страницы">
        <content-table :entities="pages"></content-table>
    </content-wrapper>
</template>
