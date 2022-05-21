<script setup>
    import { computed, onMounted } from "vue";
    import TheHeaderTop from "@/components/common/TheHeaderTop.vue";
    import TheHeaderMain from "@/components/common/TheHeaderMain.vue";

    const props = defineProps({
        test: String,
    });

    onMounted(() => {
        console.log(props.test);
    });

    const computeTest = computed(() => "111" + props.test);
</script>

<template>
    <header class="the-header">
        <the-header-top></the-header-top>
        <the-header-main></the-header-main>
    </header>
</template>

<style lang="scss">
    .the-header {
        box-shadow: 0 10px 10px rgba(#5f718d, 0.15);
    }
</style>
