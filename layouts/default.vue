<template lang="pug">
.vh-100.d-flex.flex-column
  b-navbar
    b-navbar-brand.fw-bold(to="/")
      img(src="/logo.png", alt="Weplan Analytics Logo", height="30")
      |
      | Weplan Analytics Map Test
    b-navbar-toggle(target="wenav")
    b-collapse#wenav(is-nav)
      b-navbar-nav
        b-nav-item(to="/", active-class="active fw-bold") #[icon(name="streamline:manual-book")] Instrucciones
        b-nav-item(to="/map", active-class="active fw-bold") #[icon(name="material-symbols:map-outline")] Mapa
  .flex-grow-1
    slot
</template>
