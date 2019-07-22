<script>

import { Heading } from '../../heading';
import { TextContainer } from '../../text-container';

export default {
  components: { Heading, TextContainer },

  props: {
    title: {
      type: String,
    },

    description: {
      type: String,
    },
  },
};

</script>

<template>
  <div class="annotated-section">
    <div class="annotated-section__wrapper">

      <div class="annotated-section__annotation">
        <TextContainer>
          <Heading>{{ title }}</Heading>
          <p>{{ description }}</p>
        </TextContainer>
      </div>

      <div class="annotated-section__content">
        <slot />
      </div>

    </div>
  </div>
</template>
