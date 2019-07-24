<script>

import Choice from '../../choice/components/Choice.vue';
import Icon from '../../icon/components/Icon.vue';

export default {
  components: { Choice, Icon },

  props: {
    /**
     * Disables the input.
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Additional text to aide in use.
     */
    helpText: {
      type: String,
    },

    /**
     * ID for form input.
     */
    id: {
      type: String,
    },

    /**
     * Label for the checkbox.
     */
    label: {
      type: String,
    },

    /**
     * Visually hide the label.
     */
    labelHidden: {
      type: Boolean,
      default: false,
    },

    /**
     * Name for form input.
     */
    name: {
      type: String,
    },

    /**
     * Value for form input.
     */
    value: {
      type: [String, Number, Boolean],
    },
  },

  methods: {
    onChange(e) {
      this.$emit('input', e.target.checked);
    },
  },
};

</script>

<template>
  <Choice
      :id="id"
      :label="label">

    <span class="checkbox">
      <input
          class="checkbox__input"
          type="checkbox"
          @change="onChange"
          :name="name"
          :checked="value" />

      <span class="checkbox__backdrop"></span>
      <span class="checkbox__icon">
        <Icon name="check" />
      </span>
    </span>

  </Choice>
</template>
