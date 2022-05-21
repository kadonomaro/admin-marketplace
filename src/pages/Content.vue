<script setup>
    import { inject, onMounted, ref } from "vue";

    const $api = inject("$api");
    const products = ref([]);

    onMounted(() => {
        $api.products.getAll().then((response) => {
            products.value = response;
        });
    });
</script>

<template>
    <div class="content-page">
        <h1>content-page</h1>
        <div class="products">
            <div class="product" v-for="product in products" :key="product._id">
                {{ product.name }} - {{ product.price }}
            </div>
        </div>
    </div>
</template>
