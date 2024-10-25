<template lang="pug">
.h-100.d-flex.flex-column.justify-center.items-align
  .row.justify-center.h-100
    .col.d-flex.justify-content-center.align-items-center
      events-table(:events="events", sort-by="environment")
    .col.d-flex.justify-content-center.align-items-center
      events-table(:events="events", sort-by="carrier")
</template>

<script setup lang="ts">
const { data: events, status, refresh } = useLazyFetch("/api/events");

useSeoMeta({
  title: "Estadísticas de eventos",
});
</script>
