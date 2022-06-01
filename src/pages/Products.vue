<script setup>
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const $api = inject("$api");
    const products = ref([]);

    onMounted(() => {
        $api.products.getAll().then((response) => {
            products.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Товары">
        <content-table :entities="products"></content-table>
    </content-wrapper>
</template>
