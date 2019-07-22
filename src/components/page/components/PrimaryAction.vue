<script>

import { pick } from 'lodash';
import { Button } from '../../button';

export default {
  components: { Button },

  props: {
    ...Button.props,

    content: {
      type: String,
    },
  },

  computed: {
    buttonProps() {
      return pick(this.$props, Object.keys(Button.props));
    },
  },
};

</script>

<template>
  <Button v-bind="buttonProps">
    {{ content }}
  </Button>
</template>
