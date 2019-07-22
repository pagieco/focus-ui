<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

fontAwesomeIconLibrary.add(fas);

export default {
  components: { FontAwesomeIcon },

  inheritAttrs: false,

  props: {
    /**
     * The font-icon icon.
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Descriptive text to be read to screenreaders
     */
    accessibilityLabel: {
      type: String,
    },
  },
};

</script>

<template>
  <FontAwesomeIcon v-bind="$attrs"
                   :aria-label="accessibilityLabel"
                   :icon="name" />
</template>
