<template lang="pug">
icon(name="bi:square-fill", :style="{ color }")
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>
