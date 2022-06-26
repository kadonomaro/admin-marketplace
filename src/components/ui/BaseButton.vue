<script setup lang="ts">
    const emit = defineEmits(["on-click"]);

    const onClick = () => {
        emit("on-click");
    };
</script>

<template>
    <button class="base-button" @click="onClick">
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .base-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 11px 24px;
        color: #fff;
        font-size: 16px;
        line-height: 18px;
        background-color: $primary-color;
        border-radius: $border-radius--md;
    }
</style>
