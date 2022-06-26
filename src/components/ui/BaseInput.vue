<script setup lang="ts">
    const props = defineProps({
        name: String,
        type: {
            type: String,
            default: "text",
        },
        modelValue: Boolean,
    });

    const emit = defineEmits(["update:modelValue"]);

    const updateValue = (event: any) => {
        emit("update:modelValue", event.target.value);
    };
</script>

<template>
    <label class="base-input">
        <input class="base-input__field" :type="type" :checked="modelValue" @input="updateValue" />
    </label>
</template>

<style lang="scss">
    .base-input {
    }

    .base-input__field {
        display: block;
        width: 100%;
        padding: 7px 12px;
        border: 2px solid $primary-border;
        border-radius: 7px;
        transition: border-color 0.2s ease-in;
        &:hover {
        }
    }
</style>
