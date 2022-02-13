<script setup>
    import TheHeader from "@/components/common/TheHeader.vue";
</script>

<template>
    <div class="main-layout">
        <the-header test="111"></the-header>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss"></style>
