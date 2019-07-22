<script>

import { filterClassList } from '../../../utilities';

export const Variation = {
  Positive: 'positive',
  Negative: 'negative',
  Strong: 'strong',
  Subdued: 'subdued',
  Code: 'code',
};

export default {
  props: {
    /**
     * Give text additional visual meaning.
     */
    variation: {
      type: String,
      validator: val => Object
        .values(Variation)
        .concat([null])
        .includes(val),
    },
  },

  computed: {
    classList() {
      const { variation } = this;

      return filterClassList([
        'text-style',
        { [`text-style--${variation}`]: variation },
      ]);
    },
  },
};

</script>

<template>
  <span :class="classList">
    <slot />
  </span>
</template>
