<script>

import { remove } from 'lodash';
import Checkbox from './Checkbox.vue';
import Option from './Option.vue';

export default {
  components: { Checkbox, Option },

  props: {
    /**
     * Allow more than one option to be selected.
     */
    allowMultiple: {
      type: Boolean,
      default: false,
    },

    /**
     * A unique identifier for the option list.
     */
    id: {
      type: String,
    },

    /**
     * Defines a specific role attribut for each option in the list.
     */
    optionRole: {
      type: String,
    },

    /**
     * Collection of options to be listed.
     */
    options: {
      type: Array,
    },

    /**
     * Defines a specific role attribute for the list itself.
     */
    role: {
      type: String,
    },

    /**
     * Sections containing a header and related options.
     */
    sections: {
      type: Array,
    },

    /**
     * The list title.
     */
    title: {
      type: String,
    },

    value: {
      type: [String, Number, Array],
    },
  },

  methods: {
    selectItem(index) {
      this.$emit('input', index);
    },

    checkItem({ index, checked }) {
      let { value } = this;

      if (checked) {
        value.push(index);
      } else {
        value = remove(value, n => n !== index);
      }

      this.$emit('input', value);
    },
  },
};

</script>

<template>
  <ul class="option-list">
    <li>
      <p class="option-list__title" v-if="title">
        {{ title }}
      </p>

      <ul class="option-list__options">

        <li v-for="(option, optionIndex) in options"
            class="option-list__option"
            tabindex="-1"
            :key="optionIndex">

          <Checkbox v-if="allowMultiple"
                  :index="optionIndex"
                  :label="option.label"
                  :selected="value"
                  @select="checkItem" />

          <Option v-if="!allowMultiple"
                  :index="optionIndex"
                  :label="option.label"
                  :selected="value"
                  @select="selectItem" />

        </li>

      </ul>
    </li>
  </ul>
</template>
