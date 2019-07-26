<script>

import { filterClassList } from '../../../utilities';

export default {
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
    onClick(index) {
      this.$emit('select', index);
    },
  },
};

</script>

<template>
  <button
    type="button"
    :class="className"
    @click="onClick(index)"
  >
    {{ label }}
  </button>
</template>
