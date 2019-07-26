<script>

import { Checkbox } from '../../checkbox';
import { filterClassList } from '../../../utilities';

export default {
  components: { Checkbox },

  props: {
    index: {
      type: Number,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    selected: {
      type: [String, Number, Array],
      required: true,
    },
  },

  computed: {
    className() {
      return filterClassList([
        'option-list__single-option',
        { 'option-list__single-option--selected': this.selected === this.index },
      ]);
    },
  },

  methods: {
    onChange(index, checked) {
      this.$emit('select', { index, checked });
    },

    checkboxId(index) {
      return `Checkbox_${index}`;
    },
  },
};

</script>

<template>
  <Checkbox :id="checkboxId(index)" :label="label" ref="input" @input="checked => onChange(index, checked)" />
</template>
