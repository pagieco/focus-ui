<script>

import { filterClassList } from '../../../utilities';
import { VisuallyHidden } from '../../visually-hidden';

export const Size = {
  Small: 'small',
  Medium: 'medium',
};

export const Status = {
  Success: 'success',
  Info: 'info',
  Attention: 'attention',
};

export default {
  components: { VisuallyHidden },

  props: {
    /**
     * Medium or small size. Use `small` only on the main navigation.
     */
    size: {
      type: String,
      default: Size.Medium,
      validator: val => Object
        .values(Size)
        .includes(val),
    },

    /**
     * Set the color of the badge for the given status.
     */
    status: {
      type: String,
      default: null,
      validator: val => Object
        .values(Status)
        .concat([null])
        .includes(val),
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'badge',
        [`badge--size-${this.size}`],
        { [`badge--status-${this.status}`]: this.status },
      ]);
    },
  },
};

</script>

<template>
  <span :class="classList">
    <VisuallyHidden v-if="status">
      {{ status }}
    </VisuallyHidden>

    <slot />
  </span>
</template>
