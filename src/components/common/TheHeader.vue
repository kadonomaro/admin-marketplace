<script setup>
    import TheHeaderTop from "@/components/common/TheHeaderTop.vue";
    import TheHeaderMain from "@/components/common/TheHeaderMain.vue";
    import { computed, onMounted } from "vue";

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
        {{ test }}
        <the-header-top></the-header-top>
        <the-header-main></the-header-main>
    </header>
</template>

<style lang="scss"></style>
