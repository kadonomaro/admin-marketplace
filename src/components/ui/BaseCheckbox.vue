<script setup lang="ts">
    const props = defineProps({
        modelValue: Boolean,
    });

    const emit = defineEmits(["update:modelValue"]);

    const updateValue = (event: any) => {
        emit("update:modelValue", event.target.checked);
    };
</script>

<template>
    <label class="base-checkbox">
        <input
            class="base-checkbox__field visually-hidden"
            type="checkbox"
            :checked="modelValue"
            @input="updateValue"
        />
        <span class="base-checkbox__custom">
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.47 6.51 13 1 8.06l1.61-1.58 3.9 3.56L13.4 3 15 4.47Z" fill="#1752fe" />
            </svg>
        </span>
    </label>
</template>

<style lang="scss">
    .base-checkbox {
        display: inline-block;
        cursor: pointer;
    }

    .base-checkbox__field {
        &:checked ~ .base-checkbox__custom {
            svg {
                opacity: 1;
            }
        }
    }

    .base-checkbox__custom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border: 2px solid $primary-border;
        border-radius: 7px;
        svg {
            opacity: 0;
            transition: opacity 0.2s ease-in;
        }
    }
</style>
