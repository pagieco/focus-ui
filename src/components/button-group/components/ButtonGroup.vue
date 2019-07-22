<script>

import { filterClassList } from '../../../utilities';

export default {
  name: 'focus-button-group',

  props: {
    /**
     * Buttons will stretch/shrink to occupy the full width.
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /**
     * Join buttons as segmented group.
     */
    segmented: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'button-group',
        { 'button-group--fullWidth': this.fullWidth },
        { 'button-group--segmented': this.segmented },
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
