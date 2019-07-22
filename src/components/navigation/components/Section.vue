<script>

import { filterClassList } from '../../../utilities';

export default {
  props: {
    title: {
      type: String,
    },

    action: {
      type: Object,
    },

    //
    separator: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'navigation__section',
        { 'navigation__section--with-separator': this.separator },
      ]);
    },
  },
};

</script>

<template>
  <ul :class="classList">
    <li class="navigation__list-title" v-if="title">
      <span>{{ title }}</span>
    </li>

    <slot />
  </ul>
</template>
