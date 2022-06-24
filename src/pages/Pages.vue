<script setup lang="ts">
    import { onServerPrefetch, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { usePagesStore } from "@/store/pages";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const pagesStore = usePagesStore();
    const { pages, isLoadingPages } = storeToRefs(pagesStore);
    const { getPages } = pagesStore;

    onServerPrefetch(async () => {
        await getPages();
    });

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
    </content-wrapper>
</template>
