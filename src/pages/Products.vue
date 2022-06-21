<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "@/store/products";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";

    const productsStore = useProductsStore();
    const { products } = storeToRefs(productsStore);
    const { getProducts } = productsStore;

    const isLoading = ref(true);

    onMounted(() => {
        if (products.value.length === 0) {
            getProducts().then(() => {
                isLoading.value = false;
            });
        }
    });
</script>

<template>
    <content-wrapper title="Товары">
        <the-preloader v-if="isLoading" size="lg"></the-preloader>
        <content-table v-else :entities="products"></content-table>
    </content-wrapper>
</template>
