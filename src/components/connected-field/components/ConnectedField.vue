<script>

import { filterClassList } from '../../../utilities';

export default {
  mounted() {
    const input = this.$refs
      .connectedRight
      .querySelector('input, select');

    const className = 'connected-field__connection-focussed';

    input.addEventListener('focus', () => {
      this.$refs.connectedRight.classList.add(className);
    });

    input.addEventListener('blur', () => {
      this.$refs.connectedRight.classList.remove(className);
    });
  },

  computed: {
    leftClassList() {
      return filterClassList([
        'connected-field__item',
        'connected-field__primary',
      ]);
    },

    rightClassList() {
      return filterClassList([
        'connected-field__item',
        'connected-field__connection',
      ]);
    },
  },
};

</script>

<template>
  <div class="connected-field">

    <div :class="leftClassList">
      <slot name="connected-left" />
    </div>

    <div :class="rightClassList" ref="connectedRight">
      <slot name="connected-right" />
    </div>

  </div>
</template>
