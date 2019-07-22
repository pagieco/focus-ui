<script>

import filterClassList from '../../../utilities/filterClassList';
import InputLabel from '../../input-label/components/InputLabel.vue';

export const FieldTypes = {
  Email: 'email',
  Number: 'number',
  Password: 'password',
  Search: 'search',
  Tel: 'tel',
  Text: 'text',
  URL: 'url',
};

export default {
  name: 'focus-text-input',

  components: { InputLabel },

  props: {
    /**
     * Indicates the id of a component controlled by the input.
     */
    ariaControls: {
      type: String,
    },

    /**
     * Automatically focus the input.
     */
    autoFocus: {
      type: Boolean,
      default: false,
    },

    /**
     * Force the focus state on the input.
     */
    focussed: {
      type: Boolean,
      default: false,
    },

    /**
     * Disable the input.
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
     * The placeholder text.
     */
    placeholder: {
      type: String,
    },

    /**
     * The input type.
     */
    type: {
      type: String,
      default: FieldTypes.Text,
      validator: val => Object
        .values(FieldTypes)
        .includes(val),
    },

    /**
     * Indicates whether or not the character count should be displayed.
     */
    showCharacterCount: {
      type: Boolean,
      default: false,
    },

    /**
     * Maximum character length for an input.
     */
    maxLength: {
      type: Number,
      default() {
        if (this.showCharacterCount) return 100;
        return null;
      },
    },
  },

  model: {
    event: 'update',
  },

  data() {
    return {
      characterCount: 0,
    };
  },

  computed: {
    classList() {
      return filterClassList([
        'text-input',
      ]);
    },
  },

  methods: {
    onInput(e) {
      this.setCharacterCount(e.target.value.length);
      this.$emit('update', e.target.value);
    },

    setCharacterCount(value) {
      if (this.showCharacterCount) {
        this.characterCount = value;
      }
    },
  },
};

</script>

<template>
  <div :class="classList">
    <InputLabel v-if="label"
                :label="label"
                :label-for="labelFor"
                :label-hidden="labelHidden" />

    <input :type="type"
           :aria-controls="ariaControls"
           :aria-disabled="disabled"
           :autofocus="autoFocus"
           :disabled="disabled"
           :id="id"
           :maxlength="maxLength"
           :placeholder="placeholder"
           autocomplete="off"
           @input="onInput"
           tabindex="0"
           v-bind="$attrs"
           v-on="$listeners" />

    <span v-if="showCharacterCount" class="text-input__char-count">
      {{ characterCount }}/{{ maxLength }}
    </span>
  </div>
</template>
