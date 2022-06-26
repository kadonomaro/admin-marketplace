<script setup lang="ts">
    import { ComponentType } from "@/types";
    import BaseButton from "@/components/ui/BaseButton.vue";
    import TheIcon from "@/components/TheIcon.vue";

    const props = defineProps<{ component: ComponentType }>();
    const emit = defineEmits(["on-set-component"]);

    const onSetComponent = (name: string) => {
        emit("on-set-component", name);
    };
</script>

<template>
    <div class="content-controls">
        <div class="content-controls__inner">
            <base-button
                class="content-controls__button"
                :variant="component === 'list' ? 'fill' : 'outline'"
                @click="onSetComponent('list')"
            >
                <the-icon name="list"></the-icon>
                Список
            </base-button>
            <base-button
                class="content-controls__button"
                :variant="component === 'create' ? 'fill' : 'outline'"
                @click="onSetComponent('create')"
            >
                <the-icon name="new"></the-icon>
                Создать
            </base-button>
        </div>
    </div>
</template>

<style lang="scss">
    .content-controls__inner {
        display: flex;
        align-items: center;
        margin: 0 -4px;
    }

    .content-controls__button {
        margin: 0 4px;
    }
</style>
