<script>

export default {
  props: {
    /**
     * A unique identifier for the choice.
     */
    id: {
      type: String,
    },

    /**
     * Label for the choice.
     */
    label: {
      type: String,
    },

    /**
     * Whether the associated form control is disabled.
     */
    disabled: {
      type: Boolean,
    },

    /**
     * Display an error message.
     */
    error: {
      type: String,
    },

    /**
     * Visually hide the label.
     */
    labelHidden: {
      type: Boolean,
    },

    /**
     * Additional text to aide in use.
     */
    helpText: {
      type: String,
    },
  },
};

</script>

<template>
  <div>
    <label class="choice" v-if="!labelHidden">
      <span class="choice__control">
        <slot />
      </span>

      <span class="choice__label">
        {{ label }}
      </span>
    </label>

    <div class="choice__descriptions">
      <div class="choice__helptext">{{ helpText }}</div>
      <div class="choice__error">{{ error }}</div>
    </div>
  </div>
</template>
