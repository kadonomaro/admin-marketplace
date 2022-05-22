<script>
    import TheNavigation from "@/components/common/TheNavigation.vue";
    export default {
        name: "TheSidebar",
        components: { TheNavigation },
    };
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
