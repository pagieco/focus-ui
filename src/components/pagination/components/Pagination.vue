<script>

import { ButtonGroup } from '../../button-group';
import { Button } from '../../button';
import { Icon } from '../../icon';

export default {
  components: {
    ButtonGroup,
    Button,
    Icon,
  },

  props: {
    /**
     * Accessible label for pagination.
     */
    accessibilityLabel: {
      type: String,
    },

    /**
     * Whether there is a next page to show.
     */
    hasNext: {
      type: Boolean,
      default: true,
    },

    /**
     * Whether there is a previous page to show.
     */
    hasPrevious: {
      type: Boolean,
      default: true,
    },

    /**
     * Keyboard shortcut for the next button.
     */
    nextKeys: {
      type: Array,
      default: () => ([]),
    },

    /**
     * The URL of the next page.
     */
    nextUrl: {
      type: String,
    },

    /**
     * Keyboard shortcuts for the previous button.
     */
    previousKeys: {
      type: Array,
      default: () => ([]),
    },

    /**
     * The URL of the previous page.
     */
    previousUrl: {
      type: String,
    },
  },

  mounted() {
    document.addEventListener('keydown', this.bindKeyboardHandlers);
  },

  destroyed() {
    document.removeEventListener('keydown', this.bindKeyboardHandlers);
  },

  methods: {
    bindKeyboardHandlers(e) {
      if (this.previousKeys.includes(e.key)) {
        if (this.previousUrl) {
          window.location.href = this.previousUrl;
        } else {
          this.onPreviousHandler();
        }
      }

      if (this.nextKeys.includes(e.key)) {
        if (this.nextUrl) {
          window.location.href = this.nextUrl;
        } else {
          this.onNextHandler();
        }
      }
    },

    onPreviousHandler() {
      this.$emit('previous');
    },

    onNextHandler() {
      this.$emit('next');
    },
  },
};

</script>

<template>
  <nav class="pagination" :aria-label="accessibilityLabel">
    <ButtonGroup segmented>

      <Button small
              @click="onPreviousHandler"
              :disabled="!hasPrevious"
              :url="previousUrl">
        <Icon name="caret-left" />
      </Button>

      <Button small
              @click="onNextHandler"
              :disabled="!hasNext"
              :url="nextUrl">
        <Icon name="caret-right" />
      </Button>

    </ButtonGroup>
  </nav>
</template>
