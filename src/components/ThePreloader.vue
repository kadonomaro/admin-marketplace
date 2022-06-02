<script setup lang="ts">
    const props = defineProps({
        size: {
            type: String,
            default: "sm",
        },
    });
</script>

<template>
    <div class="the-preloader-wrapper">
        <div class="the-preloader" :class="[`the-preloader--${size}`]">
            <div class="the-preloader__item"></div>
            <div class="the-preloader__item"></div>
            <div class="the-preloader__item"></div>
            <div class="the-preloader__item"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-preloader-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .the-preloader {
        position: relative;
        width: var(--size);
        height: var(--size);
    }

    .the-preloader--sm {
        --size: 32px;
    }

    .the-preloader--lg {
        --size: 48px;
    }

    .the-preloader__item {
        position: absolute;
        width: calc(50% - 2px);
        height: calc(50% - 2px);
        border-radius: 4px;
        animation: preloader 4s ease-in infinite;
        &:nth-child(1) {
            top: 0;
            left: 0;
        }
        &:nth-child(2) {
            top: 0;
            right: 0;
            animation-delay: 1s;
        }
        &:nth-child(3) {
            bottom: 0;
            right: 0;
            animation-delay: 2s;
        }
        &:nth-child(4) {
            bottom: 0;
            left: 0;
            animation-delay: 3s;
        }
    }

    @keyframes preloader {
        0%,
        100% {
            background-color: transparent;
        }
        50% {
            background-color: $primary-color;
        }
    }
</style>
