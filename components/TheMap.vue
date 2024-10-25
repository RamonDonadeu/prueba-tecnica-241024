<template lang="pug">
#map.h-100.w-100
</template>

<script setup lang="ts">
import type { Feature, Point } from "geojson";
import { Map as Maplibre } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

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
  mapRef.value = createMap();
});

watch(
  () => props,
  () => {
    mapRef.value = createMap();
  },
  { deep: true }
);

function createMap() {
  return markRaw(
    new Maplibre({
      container: "map",
      center: [-3.706512, 40.415587],
      zoom: 7,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          },
          events: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: props.events,
            },
          },
          bbox: {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-4.12719, 40.187386],
                    [-4.12719, 40.647991],
                    [-3.258868, 40.647991],
                    [-3.258868, 40.187386],
                    [-4.12719, 40.187386],
                  ],
                ],
              },
              properties: {
                name: "[-4.12719,40.187386,-3.258868,40.647991]",
              },
            },
          },
        },
        layers: [
          {
            id: "base-tiles",
            source: "osm",
            type: "raster",
            layout: {
              visibility: "visible",
            },
          },
          {
            id: "bbox-outline",
            source: "bbox",
            type: "line",
            layout: {
              visibility: "visible",
            },
            paint: {
              "line-color": "#33632d",
              "line-width": 3,
            },
          },
          // Implementar aqui la layer para events
          {
            id: "carriers",
            source: "events",
            type: "circle",
            layout: {
              visibility: props.colorBy === "carrier" ? "visible" : "none",
            },
            paint: {
              "circle-radius": 4,
              "circle-stroke-width": 2,
              "circle-color": [
                "match",
                ["get", "carrier"],
                "MOVISTAR",
                "rgb(1, 92, 132)",
                "VODAFONE",
                "rgb(228, 2, 15)",
                "ORANGE",
                "rgb(255, 121, 0)",
                "#ff0000",
              ],
            },
          },
          {
            id: "environments",
            source: "events",
            type: "circle",
            layout: {
              visibility: props.colorBy === "carrier" ? "visible" : "none",
            },
            paint: {
              "circle-radius": 4,
              "circle-stroke-width": 2,
              "circle-color": [
                "match",
                ["get", "environment"],
                "INDOOR",
                "#bb4600",
                "OUTDOOR",
                "#02a40f",
                "VEHICLE",
                "#9e00ad",
                "#ff0000",
              ],
            },
          },
        ],
      },
    })
  );
}
</script>
