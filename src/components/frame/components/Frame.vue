<script>

import { filterClassList } from '../../../utilities';

export default {
  computed: {
    classList() {
      return filterClassList([
        'frame',
        { 'frame--sans-nav': !this.hasNavigation },
      ]);
    },

    hasTopBar() {
      return this.$slots['top-bar'] !== undefined;
    },

    hasNavigation() {
      return this.$slots.navigation !== undefined;
    },
  },
};

</script>

<template>
  <div :class="classList">
    <header class="frame__top-bar" v-if="hasTopBar">
      <slot name="top-bar" />
    </header>

    <nav class="frame__navigation" v-if="hasNavigation">
      <slot name="navigation" />
    </nav>

    <main class="frame__main">
      <slot />
    </main>

    <portal-target class="toast-manager" multiple name="toast" />
    <portal-target class="modal-manager" name="modal" />

  </div>
</template>
