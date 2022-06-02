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
    <div class="the-table-wrapper">
        <div class="the-table">
            <div class="the-table__row">
                <div v-for="cell in tableHead" :key="cell.prop" class="the-table__head">
                    <span>{{ cell.name }}</span>
                    <button class="the-table__sort" @click="setSortProperty(cell.prop)">
                        <the-icon :class="{ 'is-active': sortProperty === cell.prop }" name="sort"></the-icon>
                    </button>
                </div>
            </div>

            <div class="the-table__row" v-for="entity in sortedEntities" :key="entity._id">
                <div class="the-table__cell">
                    <base-checkbox v-model="entity.isActive"></base-checkbox>
                </div>
                <div class="the-table__cell">{{ entity[props.name] }}</div>
                <div class="the-table__cell">{{ dateFilter(entity.createdAt) }}</div>
                <div class="the-table__cell">{{ dateFilter(entity.updatedAt) }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-table {
        width: 100%;
        font-size: 14px;
        text-align: left;
        border-radius: 12px;
        border-collapse: collapse;
        overflow: hidden;
    }

    .the-table__head,
    .the-table__cell {
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-basis: 33.3333%;
        padding: 16px 12px;
        &:first-child {
            max-width: 150px;
            flex-basis: 150px;
        }
    }

    .the-table__row {
        display: flex;
        &:nth-child(odd) {
            .the-table__cell {
                background-color: #f9fcfd;
            }
        }
    }

    .the-table__head {
        position: relative;
        padding-right: 32px;
        background-color: #f4f7f8;
    }

    .the-table__cell {
    }

    .the-table__sort {
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
