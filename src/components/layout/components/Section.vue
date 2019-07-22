<script>

import { filterClassList } from '../../../utilities';

export default {
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    oneHalf: {
      type: Boolean,
      default: false,
    },

    oneThird: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'layout__section',
        { 'layout__section--secondary': this.secondary },
        { 'layout__section--full-width': this.fullWidth },
        { 'layout__section--one-half': this.oneHalf },
        { 'layout__section--one-third': this.oneThird },
      ]);
    },
  },
};

</script>

<template>
  <div :class="classList">
    <slot />
  </div>
</template>
