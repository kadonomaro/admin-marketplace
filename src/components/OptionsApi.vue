<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
    name: "OptionsApi",
    components: {BaseButton},
    props: {
        title: {
            type: String,
        }
    },
    data() {
        return {
            updatedTitle: this.title
        }
    },
    mounted() {
        this.$emit("on-mounted", true);
    },
    methods: {
        onChangeTitle() {
            this.updatedTitle = "Новый заголовок"
        }
    }
}
</script>

<template>
    <div class="options-api">
        <h1>{{ updatedTitle }}</h1>
        <base-button @on-click="onChangeTitle">Изменить заголовок</base-button>
        <madrobots-checkout></madrobots-checkout>
    </div>
</template>

<style lang="scss">

</style>