<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "@/store/products";
    import { ComponentType, FormFields } from "@/types";
    import { Product } from "@/types/products";
    import ContentTable from "@/components/ContentTable.vue";
    import ContentWrapper from "@/components/ContentWrapper.vue";
    import ContentCreate from "@/components/ContentCreate.vue";
    import ContentControls from "@/components/ContentControls.vue";

    const { products, isLoadingProducts } = storeToRefs(useProductsStore());
    const { createProduct, getProducts } = useProductsStore();

    const onCreateProduct = (product: Product) => {
        createProduct(product).then(() => {
            component.value = "list";
        });
    };

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

    const component = ref<ComponentType>("list");
    const onSetComponent = (name: ComponentType) => {
        component.value = name;
    };

    onMounted(() => {
        if (products.value.length === 0) {
            getProducts();
        }
    });
</script>

<template>
    <content-wrapper title="Товары">
        <div class="content-wrapper__controls">
            <content-controls :component="component" @on-set-component="onSetComponent"></content-controls>
        </div>

        <template v-if="component === 'list'">
            <the-preloader v-if="isLoadingProducts" size="lg"></the-preloader>
            <content-table v-else :entities="products"></content-table>
        </template>

        <template v-if="component === 'create'">
            <content-create title="Создать товар" :fields="fields" @on-create="onCreateProduct"></content-create>
        </template>
    </content-wrapper>
</template>

<style lang="scss">
    .content-wrapper__controls {
        margin-bottom: 24px;
    }
</style>
