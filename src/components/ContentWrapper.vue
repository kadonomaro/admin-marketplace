<script setup lang="ts">
    import { defineProps } from "vue";

    const props = defineProps({
        title: String,
    });
</script>

<template>
    <div class="content-wrapper">
        <h1 class="content-wrapper__title">{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .content-wrapper__title {
        margin-bottom: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }
</style>
