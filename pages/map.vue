<template lang="pug">
.h-100.d-flex.flex-column
  .container-fluid
    .row.row-cols-3.py-2
      .col
        div(v-if="events && !loading") Pintando {{ events?.length ?? 0 }} eventos
        div(v-if="loading") Cargando
      .col
        b-input-group.w-100(size="sm")
          template(#prepend)
            b-input-group-text.hstack.gap-1
              icon(name="ic:twotone-invert-colors")
              div Colorear por
          b-form-select(v-model="colorBy")
            b-form-select-option(value="env") Entorno
            b-form-select-option(value="carrier") Operadora
      .col
        b-button.w-100(
          size="sm",
          @click="() => refresh()",
          variant="primary",
          :disabled="loading"
        ) #[icon(name="material-symbols:sync")] {{ loading ? "Actualizando" : "Actualizar" }}
  .flex-grow-1
    the-map(:events="events", :color-by="colorBy")
</template>

<script setup lang="ts">
const { data: events, status, refresh } = useLazyFetch("/api/events");
const loading = computed(() => status.value === "pending");

const colorBy = ref<"carrier" | "env">("carrier");

useSeoMeta({
  title: "Mapa de eventos",
});
</script>
