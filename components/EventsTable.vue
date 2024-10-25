<template lang="pug">
b-card(:title="'Sorted by ' + sortBy")
  b-table(:items="data")
</template>

<script setup lang="ts">
import type { Feature, Point } from "geojson";

const data = ref([]);
const props = defineProps<{
  events: Feature<
    Point,
    {
      environment: string;
      carrier: string;
    }
  >[];
  sortBy: "environment" | "carrier";
}>();

onMounted(() => {
  const totalValues = props.events.length;
  const grouping = Object.groupBy(
    props.events,
    (feature: Feature) => feature.properties?.[props.sortBy] ?? undefined
  );

  Object.keys(grouping).forEach((key) => {
    data.value.push({
      [props.sortBy === "carrier" ? "Carrier" : "Environment"]: key,
      "Number of events": grouping[key].length,
      percentile: (grouping[key].length / totalValues) * 100 + "%",
    });
  });
});
</script>
