<script setup lang="ts">
    import { computed } from "vue";

    type ComponentProps = {
        name: "close" | "arrow" | "upload" | "download" | "new" | "plus" | "minus" | "trash" | "sort" | "list";
    };
    const props = defineProps<ComponentProps>();

    const getIconUrl = computed(() => {
        return `/static/sprites.svg#${props.name}`;
    });
</script>

<template>
    <svg :class="[`icon-${props.name}`]" xmlns="http://www.w3.org/2000/svg">
        <use :xlink:href="getIconUrl" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
    </svg>
</template>
