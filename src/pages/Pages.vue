<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { usePagesStore } from "@/store/pages";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const pagesStore = usePagesStore();
    const { pages } = storeToRefs(pagesStore);
    const { getPages } = pagesStore;

    const isLoading = ref(true);

    onMounted(() => {
        if (pages.value.length === 0) {
            getPages().then(() => {
                isLoading.value = false;
            });
        }
    });
</script>

<template>
    <content-wrapper title="Страницы">
        <the-preloader v-if="isLoading" size="lg"></the-preloader>
        <content-table v-else :entities="pages"></content-table>
    </content-wrapper>
</template>
