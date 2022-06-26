<script setup lang="ts">
    interface ComponentProps {
        title: string;
        fields: FormFields[];
    }

    import { ref } from "vue";
    import BaseInput from "@/components/ui/BaseInput.vue";
    import { FormFields } from "@/types";

    const emit = defineEmits(["on-create"]);

    const props = defineProps<ComponentProps>();

    const fieldsModel = ref({});

    const onSubmit = () => {
        emit("on-create", fieldsModel.value);
    };
</script>

<template>
    <div class="content-create">
        <div class="content-create__head">{{ title }}</div>

        <form class="content-create__form" @submit.prevent="onSubmit">
            <div v-for="field in props.fields" class="content-create__row">
                <div class="content-create__label">{{ field.label }}</div>
                <base-input
                    :name="field.name"
                    :type="field.type"
                    :label="field.label"
                    v-model="fieldsModel[field.name]"
                ></base-input>
            </div>

            <button>Сохранить</button>
        </form>
    </div>
</template>

<style lang="scss">
    .content-create {
        font-size: 14px;
        text-align: left;
        border-radius: 12px;
        overflow: hidden;
    }

    .content-create__head {
        padding: 16px 12px;
        font-weight: 600;
        background-color: #f4f7f8;
    }

    .content-create__form {
        padding: 0 12px;
    }

    .content-create__row {
        display: flex;
        align-items: center;
        padding: 10px 0;
    }

    .content-create__label {
        flex-grow: 1;
    }
</style>
