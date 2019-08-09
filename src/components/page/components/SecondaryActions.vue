<script>

import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';

export default {
  components: { Button, ButtonGroup },

  props: {
    actions: {
      type: Array,
    },
  },
};

</script>

<template>
  <ButtonGroup>
    <Button small
        v-for="(action, actionIndex) in actions"
        v-bind="{ ...action }"
        :key="actionIndex">
      {{ action.content }}
    </Button>
  </ButtonGroup>
</template>
