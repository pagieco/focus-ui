<script>

import { filterClassList } from '../../../utilities';

export const Type = {
  Bullet: 'bullet',
  Number: 'number',
};

export default {
  props: {
    /**
     * Type of list to display.
     */
    type: {
      type: String,
      default: Type.Bullet,
      validator: val => Object
        .values(Type)
        .includes(val),
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'list',
        [`list--type-${this.type}`],
      ]);
    },

    elementType() {
      return this.type === Type.Bullet ? 'ul' : 'ol';
    },
  },
};

</script>

<template>
  <ul :is="elementType" :class="classList">
    <slot />
  </ul>
</template>
