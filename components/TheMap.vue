<template lang="pug">
#map.h-100.w-100
</template>

<script setup lang="ts">
import type { Feature, Point } from "geojson";
import { Map as Maplibre } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const { createMap } = useMap();

const props = defineProps<{
  events: Feature<
    Point,
    {
      environment: string;
      carrier: string;
    }
  >[];
  colorBy: "env" | "carrier";
}>();

const mapRef = shallowRef<Maplibre | null>(null);

onMounted(() => {
  mapRef.value = createMap(props.events, props.colorBy);
});

watch(
  () => props,
  () => {
    mapRef.value = createMap(props.events, props.colorBy);
  },
  { deep: true }
);
</script>
