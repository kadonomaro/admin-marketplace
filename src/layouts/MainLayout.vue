<script setup>
    import TheSidebar from "@/components/common/TheSidebar.vue";
</script>

<template>
    <div class="main-layout">
        <aside class="main-layout__side">
            <the-sidebar></the-sidebar>
        </aside>

        <main class="main-layout__main">
            <router-view />
        </main>
    </div>
</template>

<style lang="scss">
    .main-layout {
        min-height: 100vh;
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: flex-start;
            padding: 16px;
        }
    }

    .main-layout__side {
        @include bp($bp-desktop-sm) {
            position: sticky;
            top: 16px;
            flex-basis: 240px;
            max-width: 240px;
        }
    }

    .main-layout__main {
        @include bp($bp-desktop-sm) {
            padding: 12px 24px;
        }
    }
</style>
