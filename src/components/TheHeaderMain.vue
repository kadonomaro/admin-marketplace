<script setup lang="ts">
    import TheNavigation from "../components/TheNavigation.vue";
</script>

<template>
    <div class="the-header-main">
        <the-navigation></the-navigation>
    </div>
</template>

<style lang="scss">
    .the-header-main {
        @include bp($bp-desktop-sm) {
            padding: 12px 24px;
        }
    }
</style>
