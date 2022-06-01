<script setup lang="ts">
    import { computed, defineProps, PropType, ref } from "vue";
    import TheIcon from "./TheIcon.vue";

    const props = defineProps({
        entities: {
            type: Object as PropType<any>,
            required: true,
            default: () => ({}),
        },
    });

    const sortProperty = ref("isActive");
    const setSortProperty = (property: string): void => {
        sortProperty.value = property;
    };
    const sortedEntities = computed(() => {
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
        <table class="the-table">
            <thead>
                <tr class="the-table__row">
                    <th v-for="cell in tableHead" :key="cell.prop" class="the-table__head">
                        <span>{{ cell.name }}</span>
                        <button class="the-table__sort" @click="setSortProperty(cell.prop)">
                            <the-icon name="sort"></the-icon>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="the-table__row" v-for="entity in sortedEntities" :key="entity._id">
                    <td class="the-table__cell">{{ entity.isActive }}</td>
                    <td class="the-table__cell">{{ entity.name }}</td>
                    <td class="the-table__cell">{{ dateFilter(entity.createdAt) }}</td>
                    <td class="the-table__cell">{{ dateFilter(entity.updatedAt) }}</td>
                </tr>
            </tbody>
        </table>
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
        padding: 10px 12px;
        width: calc(33.3333% - 150px);
        &:first-child {
            width: 150px;
        }
    }

    .the-table__row {
        &:nth-child(even) {
            .the-table__cell {
                background-color: #f9fcfd;
            }
        }
    }

    .the-table__head {
        position: relative;
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
        svg {
            width: 24px;
            height: 24px;
            stroke: $primary-text;
        }
    }
</style>
