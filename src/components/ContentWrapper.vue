<script setup lang="ts">
    const props = defineProps<{ title: string }>();
</script>

<template>
    <div class="content-wrapper">
        <h1 class="content-wrapper__title">{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .content-wrapper__title {
        margin-bottom: 12px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 24px;
        }
    }
</style>
