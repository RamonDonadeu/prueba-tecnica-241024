<template lang="pug">
.container-fluid
  .row
    .col
      h2.fs-5.fw-bold ¿Qué queremos conseguir?
      p Vamos a hacer un mapa de ubicaciones de usuarios, de los que tenemos como metadatos su operadora y su entorno (si estaban en interiores, exteriores o en vehículo)
      p Para ello, la página #[code /map] llama a nuestro endpoint #[code /api/events]. Este endpoint simulará hacer una query, en la que devolveremos la estructura que piden las props del componente TheMap.vue.
      h2.fs-5.fw-bold Tareas
      p En el endpoint /api/events
      ul
        li Generar 10000 puntos aleatorios dentro del BBox
          |
          code [-4.12719,40.187386,-3.258868,40.647991]
        li Cada request deberá generar 10000 puntos aleatorios, no vale hardcodear una lista
        li Cada punto tendrá además como metadatos:
          ul
            li carrier: un valor aleatorio entre ORANGE, MOVISTAR, VODAFONE
            li environment: un valor aleatorio entre INDOOR, OUTDOOR, VEHICLE
      p Con respecto al mapa:
      ul
        li El mapa ha de mostrar la capa de puntos. El usuario puede escoger entre colorear el punto por operadora o por entorno.
        li Si escoge por operadora los colores deben ser
          ul
            li #[color-preview(color="#015C84")] MOVISTAR
            li #[color-preview(color="#E4020F")] VODAFONE
            li #[color-preview(color="#FF7900")] ORANGE
        li Si se escoge por entorno, cada uno debe mostrar un color distinto, a elección del programador
        span Se han elegido los siguientes colores:
          ul
              li #[color-preview(color="#bb4600")] INDOOR
              li #[color-preview(color="#02a40f")] OUTDOOR
              li #[color-preview(color="#9e00ad")] VEHICLE
        li El cambio de color debe ser en directo (reactivo), no se puede recargar la página. Igual que al pulsar el botón actualizar, que hará una nueva petición al backend.
        li Añadir el control de zoom al mapa
      p Por último:
      ul
        li Añadir una nueva página, "Estadísticas".
        li La página tendrá 2 tarjetas, cada una de ellas con una tabla:
          ul
            li Eventos por operadora
            li Eventos por entorno
        li La tabla mostrará el conteo de eventos por cada uno de los valores, así como el % que suponen del total.
        li Componentizar para que las dos tarjetas usen el mismo componente.
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Instrucciones para la prueba",
});
</script>
