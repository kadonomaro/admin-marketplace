<script setup lang="ts">
    import TheNavigation from "../components/TheNavigation.vue";
</script>

<template>
    <div class="the-sidebar">
        <div class="the-sidebar__navigation">
            <the-navigation></the-navigation>
        </div>
    </div>
</template>

<style lang="scss">
    .the-sidebar {
        height: 100%;
        padding: 12px;
        border-radius: 25px;
        box-shadow: 0 0 25px #f2f2f5;
    }
</style>
