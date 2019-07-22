<script>

import { filterClassList } from '../../../utilities';

export default {
  name: 'focus-card-section',

  props: {
    /**
     * Title content for the card.
     */
    title: {
      type: String,
    },

    /**
     * A less prominent card.
     */
    subdued: {
      type: Boolean,
      default: false,
    },

    /**
     * Minimize the cards' padding.
     */
    shallow: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'card__section',
        { 'card__section--subdued': this.subdued },
        { 'card__section--shallow': this.shallow },
      ]);
    },
  },
};

</script>

<template>
  <div :class="classList">
    <header v-if="title">
      <h3 :aria-label="title">{{ title }}</h3>
    </header>

    <slot />
  </div>
</template>
