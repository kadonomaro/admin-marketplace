<script setup lang="ts">
    type ComponentProps = {
        name: string;
        type?: string;
        modelValue: boolean;
    };

    const props = withDefaults(defineProps<ComponentProps>(), {
        type: "text",
    });
    const emit = defineEmits(["update:modelValue"]);

    const updateValue = (event: Event): void => {
        const target = event.target as HTMLInputElement;
        emit("update:modelValue", target.value);
    };
</script>

<template>
    <label class="base-input">
        <input class="base-input__field" :type="props.type" :checked="modelValue" @input="updateValue" />
    </label>
</template>

<style lang="scss">
    .base-input {
    }

    .base-input__field {
        display: block;
        width: 100%;
        padding: 9px 12px;
        font-size: 14px;
        line-height: 18px;
        border: 2px solid $primary-border;
        border-radius: $border-radius--md;
        transition: border-color 0.2s ease-in;
        &:hover,
        &:focus {
            border-color: $primary-color;
            outline: none;
        }
    }
</style>
