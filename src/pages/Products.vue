<script setup lang="ts">
    import { onServerPrefetch, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "@/store/products";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const productsStore = useProductsStore();
    const { products, isLoadingProducts } = storeToRefs(productsStore);
    const { getProducts } = productsStore;

    onServerPrefetch(async () => {
        await getProducts();
    });

    onMounted(() => {
        if (products.value.length === 0) {
            getProducts();
        }
    });
</script>

<template>
    <content-wrapper title="Товары">
        <the-preloader v-if="isLoadingProducts" size="lg"></the-preloader>
        <content-table v-else :entities="products"></content-table>
    </content-wrapper>
</template>
