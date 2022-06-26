<script setup lang="ts">
    const props = withDefaults(defineProps<{ variant: "fill" | "outline" }>(), {
        variant: "fill",
    });
    const emit = defineEmits(["on-click"]);

    const onClick = () => {
        emit("on-click");
    };
</script>

<template>
    <button class="base-button" :class="{ [`is-${variant}`]: variant }" @click="onClick">
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .base-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 6px 12px;
        color: #fff;
        font-size: 16px;
        line-height: 24px;
        border: 2px solid transparent;
        border-radius: $border-radius--md;
        transition: background-color 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in;
        svg {
            margin-right: 12px;
            width: 24px;
            height: 24px;
        }
        &.is-fill {
            background-color: $primary-color;
            &:hover {
                background-color: darken($primary-color, 10%);
            }
            svg {
                stroke: #fff;
            }
        }
        &.is-outline {
            color: $primary-color;
            border-color: $primary-color;
            &:hover {
                border-color: darken($primary-color, 10%);
            }
            svg {
                stroke: $primary-color;
            }
        }
    }
</style>
