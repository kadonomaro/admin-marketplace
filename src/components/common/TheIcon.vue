<script setup>
    import { computed } from "vue";

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
    });

    const getIconUrl = computed(() => {
        return `/static/sprites.svg#${props.name}`;
    });
</script>

<template>
    <svg :class="[`icon-${props.name}`]" xmlns="http://www.w3.org/2000/svg">
        <use :xlink:href="getIconUrl" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
    </svg>
</template>
