<script>

import { Icon } from '../../icon';

export const DEFAULT_TOAST_DURATION = 5000;

export default {
  components: { Icon },

  props: {
    /**
     * The content that should appear in the toast message.
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * If the toast is visible by default.
     */
    isVisible: {
      type: Boolean,
      default: false,
    },

    /**
     * The length of time in milliseconds the toast message should persist.
     */
    duration: {
      type: Number,
      default: DEFAULT_TOAST_DURATION,
    },

    destroyOnClose: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      visible: this.isVisible,
    };
  },

  methods: {
    show() {
      this.visible = true;

      setTimeout(() => {
        this.close();
      }, this.duration);
    },

    close() {
      this.visible = false;

      if (this.destroyOnClose) {
        this.$destroy();
      }
    },
  },
};

</script>

<template>
  <portal to="toast">
    <div aria-live="polite" ref="toast" v-if="visible">
      <div class="toast">
        <span class="toast__content">{{ content }}</span>
        <button type="button" class="toast__close-button" @click="close">
          <Icon name="times"></Icon>
        </button>
      </div>
    </div>
  </portal>
</template>
