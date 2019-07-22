<script>

export const Sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
};

export default {
  props: {
    /**
     * Alt text for the thumbnail image.
     */
    alt: {
      type: String,
      required: true,
    },

    /**
     * Size of the thumbnail.
     */
    size: {
      type: String,
      default: Sizes.Medium,
      validator: val => Object
        .values(Sizes)
        .includes(val),
    },

    /**
     * The source of the thumbnail image.
     */
    source: {
      type: String,
      required: true,
    },
  },

  computed: {
    classList() {
      return [
        'thumbnail',
        [`thumbnail--size-${this.size}`],
      ];
    },
  },
};

</script>

<template>
  <span :class="classList">
    <img :src="source" :alt="alt" />
  </span>
</template>
