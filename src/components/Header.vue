<script setup>
defineProps({
    title: String,
    subtitle: String
})
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <h2 v-if="subtitle.length > 0">{{ subtitle }}</h2>
    </header>
</template>
