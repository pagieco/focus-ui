<script>

import InputLabel from '../../input-label/components/InputLabel.vue';

export default {
  name: 'focus-select',

  components: { InputLabel },

  props: {
    /**
     * Disable input.
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * ID for the input.
     */
    id: {
      type: String,
    },

    /**
     * Label for the input.
     */
    label: {
      type: String,
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

    /**
     * The name for the input.
     */
    name: {
      type: String,
    },

    /**
     * List of options or option groups to choose from.
     */
    options: {
      type: Array,
      default: () => ([]),
    },

    /**
     * Example text to display as a placeholder.
     */
    placeholder: {
      type: String,
    },
  },

  data() {
    return {
      selectElement: null,
      selectedOption: '',
    };
  },

  mounted() {
    this.setSelectedOption();
    this.$refs.selectElement.addEventListener('change', this.setSelectedOption);
  },

  methods: {
    setSelectedOption() {
      const el = this.$refs.selectElement;

      if (el && el.selectedIndex > -1) {
        this.selectedOption = el.options[el.selectedIndex].text;
      }
    },
  },
};

</script>

<template>
  <div class="select-input">
    <InputLabel v-if="label"
                :label="label"
                :label-for="labelFor"
                :label-hidden="labelHidden" />

    <select ref="selectElement"
            :aria-disabled="disabled"
            :disabled="disabled"
            :name="name"
            :id="id">
      <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
      <option v-for="(option, key) in options"
              :value="option.value"
              :key="key">{{ option.label }}</option>
    </select>

    <div class="select-input__content">
      <div class="select-input__selected-option">{{ selectedOption }}</div>
      <div class="select-input__icon">

      </div>
    </div>
  </div>
</template>
