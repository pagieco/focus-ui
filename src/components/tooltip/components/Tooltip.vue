<script>

import Popper from 'popper.js';

export const Placement = {
  Auto: 'auto',
  Top: 'top',
  TopStart: 'top-start',
  TopEnd: 'top-end',
  Right: 'right',
  RightStart: 'right-start',
  RightEnd: 'right-end',
  Bottom: 'bottom',
  BottomStart: 'bottom-start',
  BottomEnd: 'bottom-end',
  Left: 'left',
  LeftStart: 'left-start',
  LeftEnd: 'left-end',
};

export default {
  props: {
    /**
     * The content to display with the tooltip.
     */
    content: {
      type: String,
    },

    /**
     * The tooltip placement.
     */
    placement: {
      type: String,
      default: 'top',
      validator: val => Object
        .values(Placement)
        .includes(val),
    },
  },

  mounted() {
    this.createPopperInstance();
  },

  methods: {
    createPopperInstance() {
      return new Popper(this.$el, this.$refs.content, {
        placement: this.placement,
      });
    },

    showTooltip() {
      this.$el.classList.add('tooltip__open');
    },

    hideTooltip() {
      this.$el.classList.remove('tooltip__open');
    },
  },
};

</script>

<template>
  <span class="tooltip" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <span class="tooltip__contents" ref="content">{{ content }}</span>
    <slot />
  </span>
</template>
