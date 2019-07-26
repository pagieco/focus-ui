<script>

import { Icon } from '../../icon';

export default {
  components: { Icon },
};

</script>

<template>
  <div class="footer-help">
    <div class="footer-help__content">
      <div class="footer-help__icon">
        <Icon name="question" />
      </div>
      <div class="footer-help__text">
        <slot />
      </div>
    </div>
  </div>
</template>
