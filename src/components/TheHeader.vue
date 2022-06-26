<script setup lang="ts">
    import TheHeaderTop from "@/components/TheHeaderTop.vue";
    import TheHeaderMain from "@/components/TheHeaderMain.vue";
</script>

<template>
    <header class="the-header">
        <the-header-top></the-header-top>
        <the-header-main></the-header-main>
    </header>
</template>

<style lang="scss">
    .the-header {
        box-shadow: 0 10px 10px rgba(#5f718d, 0.15);
    }
</style>
