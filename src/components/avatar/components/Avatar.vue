<script>

import { filterClassList, getInitials } from '../../../utilities';

export default {
  name: 'avatar',

  props: {
    /**
     * Accessible label for the avatar image.
     */
    accessibilityLabel: {
      type: String,
    },

    /**
     * The source of the avatar image.
     */
    src: {
      type: String,
    },

    /**
     * The user's name.
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Changes the size of the button.
     */
    small: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'avatar',
        { 'avatar--small': this.small },
      ]);
    },

    initials() {
      let initials = getInitials(this.name);

      if (this.small) {
        initials = initials.substr(0, 1);
      }

      return initials;
    },
  },
};

</script>

<template>
  <div :class="classList" :aria-label="accessibilityLabel || name">
    <span v-if="!src && name" class="avatar__initials">
      {{ initials }}
    </span>

    <img role="presentation" v-if="src" :src="src" />
  </div>
</template>
