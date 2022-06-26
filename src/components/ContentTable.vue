<script setup lang="ts">
    import { computed, PropType, ref } from "vue";
    import TheIcon from "@/components/TheIcon.vue";
    import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";

    const props = defineProps({
        entities: {
            type: Object as PropType<any>,
            required: true,
            default: () => ({}),
        },
        name: {
            type: String,
            default: "name",
        },
    });

    const sortProperty = ref("");
    const setSortProperty = (property: string): void => {
        sortProperty.value = property;
    };
    const sortedEntities = computed(() => {
        if (!sortProperty.value) {
            return props.entities;
        }
        return [...props.entities].sort((a, b) => {
            return a[sortProperty.value] > b[sortProperty.value] ? 1 : -1;
        });
    });

    const dateFilter = (date: string): string => {
        if (!date) {
            return "-";
        }
        return new Date(date).toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const tableHead = [
        { name: "Активность", prop: "isActive" },
        { name: "Название", prop: "name" },
        { name: "Дата создания", prop: "createdAt" },
        { name: "Дата изменения", prop: "updatedAt" },
    ];
</script>

<template>
    <div class="content-table">
        <div class="content-table__row">
            <div v-for="cell in tableHead" :key="cell.prop" class="content-table__head">
                <span>{{ cell.name }}</span>
                <button class="content-table__sort" @click="setSortProperty(cell.prop)">
                    <the-icon :class="{ 'is-active': sortProperty === cell.prop }" name="sort"></the-icon>
                </button>
            </div>
        </div>

        <div class="content-table__row" v-for="entity in sortedEntities" :key="entity._id">
            <div class="content-table__cell">
                <base-checkbox v-model="entity.isActive"></base-checkbox>
            </div>
            <div class="content-table__cell">{{ entity[props.name] }}</div>
            <div class="content-table__cell">{{ dateFilter(entity.createdAt) }}</div>
            <div class="content-table__cell">{{ dateFilter(entity.updatedAt) }}</div>
        </div>
    </div>
</template>

<style lang="scss">
    .content-table {
        font-size: 14px;
        text-align: left;
        border-radius: 12px;
        overflow: hidden;
    }

    .content-table__head,
    .content-table__cell {
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-basis: 33.3333%;
        &:first-child {
            max-width: 150px;
            flex-basis: 150px;
        }
    }

    .content-table__row {
        display: flex;
        &:nth-child(odd) {
            .content-table__cell {
                background-color: #f9fcfd;
            }
        }
    }

    .content-table__head {
        position: relative;
        padding: 16px 32px 16px 12px;
        font-weight: 600;
        background-color: #f4f7f8;
    }

    .content-table__cell {
        padding: 10px 12px;
    }

    .content-table__sort {
        position: absolute;
        top: 50%;
        right: 6px;
        width: 24px;
        height: 24px;
        transform: translateY(-50%);
        &:hover {
            svg {
                stroke: $primary-color;
            }
        }
        svg {
            width: 24px;
            height: 24px;
            stroke: $primary-text;
            transition: stroke 0.2s ease-in;
            &.is-active {
                stroke: $primary-color;
            }
        }
    }
</style>
