<script setup lang="ts">
    import { inject, onMounted, ref } from "vue";
    import ContentTable from "../components/ContentTable.vue";
    import ContentWrapper from "../components/ContentWrapper.vue";
    import { Product } from "../api/types/products";

    const $api: any = inject("$api");
    const products = ref<Product[]>([]);

    onMounted(() => {
        $api.products.getAll().then((response: Product[]) => {
            products.value = response;
        });
    });
</script>

<template>
    <content-wrapper title="Товары">
        <content-table :entities="products"></content-table>
    </content-wrapper>
</template>
