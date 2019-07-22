<script>

import { filterClassList } from '../../../utilities';

export const Spacing = {
  Tight: 'tight',
  Loose: 'loose',
};

export default {
  name: 'focus-text-container',

  props: {
    spacing: {
      type: String,
      default: null,
      validator: val => Object
        .values(Spacing)
        .concat([null])
        .includes(val),
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'text-container',
        { [`text-container--${this.spacing}`]: this.spacing !== null },
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
