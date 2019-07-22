<script>

export default {
  name: 'focus-input-label',

  props: {
    /**
     * Label for the input.
     */
    label: {
      type: String,
      required: true,
    },

    /**
     * Specifies which form element a label is bound to.
     */
    labelFor: {
      type: String,
    },

    /**
     * Hides the label.
     */
    labelHidden: {
      type: Boolean,
      default: false,
    },
  },
};

</script>

<template>
  <div v-if="! labelHidden" class="input-label" :for="labelFor">
    {{ label }}
  </div>
</template>
