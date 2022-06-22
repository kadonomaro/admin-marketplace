<script setup lang="ts">
    import TheSidebar from "@/components/TheSidebar.vue";
</script>

<template>
    <div class="main-layout">
        <div class="container">
            <div class="main-layout__inner">
                <aside class="main-layout__side">
                    <the-sidebar></the-sidebar>
                </aside>

                <main class="main-layout__main">
                    <router-view />
                </main>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .main-layout {
        min-height: 100vh;
    }

    .main-layout__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: flex-start;
            padding: 16px 0;
        }
    }

    .main-layout__side {
        @include bp($bp-desktop-sm) {
            position: sticky;
            top: 16px;
            flex-basis: 320px;
            max-width: 320px;
        }
    }

    .main-layout__main {
        @include bp($bp-desktop-sm) {
            flex-grow: 1;
            padding: 12px 24px;
        }
    }
</style>
