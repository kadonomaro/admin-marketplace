<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import { Page } from "@/types/pages";
    import { Api } from "@/api";

    const $api = inject("$api") as Api;
    const pages = ref<Page[]>([]);

    const isLoading = ref(true);

    onMounted(() => {
        $api.pages.getAll().then((response: Page[]) => {
            pages.value = response;
            isLoading.value = false;
        });
    });
</script>

<template>
    <content-wrapper title="Страницы">
        <the-preloader v-if="isLoading" size="lg"></the-preloader>
        <content-table v-else :entities="pages"></content-table>
    </content-wrapper>
</template>
