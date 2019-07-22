<script>

import { filterClassList } from '../../../utilities';

export const Size = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  ExtraLarge: 'x-large',
};

export default {
  props: {
    /**
     * The size of the text.
     */
    size: {
      type: String,
      default: Size.Medium,
      validator: val => Object
        .values(Size)
        .includes(val),
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'skeleton-display-text',
        [`skeleton-display-text--size-${this.size}`],
      ]);
    },
  },
};

</script>

<template>
  <div :class="classList"></div>
</template>
