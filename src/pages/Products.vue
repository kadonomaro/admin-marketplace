<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "@/store/products";
    import { FormFields } from "@/types";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";

    const productsStore = useProductsStore();
    const { products, isLoadingProducts } = storeToRefs(productsStore);
    const { createProduct, getProducts } = productsStore;

    const fields: FormFields[] = [
        {
            label: "Название",
            name: "name",
            type: "text",
        },
        {
            label: "Сокращенное имя",
            name: "shortName",
            type: "text",
        },
        {
            label: "Цена",
            name: "price",
            type: "text",
        },
        {
            label: "Цена со скидкой",
            name: "discountPrice",
            type: "text",
        },
    ];

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
        <content-create title="Создать товар" :fields="fields" @on-create="createProduct"></content-create>
    </content-wrapper>
</template>
