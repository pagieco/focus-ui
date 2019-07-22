<script>

import { filterClassList } from '../../../utilities';

export const Size = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
};

export default {
  props: {
    /**
     * Size of the thumbnail.
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
        'skeleton-thumbnail',
        `skeleton-thumbnail--${this.size}`,
      ]);
    },
  },
};

</script>

<template>
  <div :class="classList"></div>
</template>
