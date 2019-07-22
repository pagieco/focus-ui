<script>

import { filterClassList } from '../../../utilities';

export const ElementTypes = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
};

export const Sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  XLarge: 'x-large',
};

export default {
  name: 'focus-display-text',

  props: {
    element: {
      type: String,
      default: ElementTypes.H2,
      validator: val => Object
        .values(ElementTypes)
        .includes(val),
    },

    size: {
      type: String,
      default: Sizes.Medium,
      validator: val => Object
        .values(Sizes)
        .includes(val),
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'display-text',
        [`display-text--${this.size}`],
      ]);
    },
  },
};

</script>

<template>
  <p :is="element" :class="classList">
    <slot />
  </p>
</template>
