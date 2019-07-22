<script>

export const ElementTypes = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
};

export default {
  name: 'focus-sub-heading',

  props: {
    element: {
      type: String,
      default: ElementTypes.H3,
      validator: val => Object
        .values(ElementTypes)
        .includes(val),
    },
  },
};

</script>

<template>
  <h3 :is="element" class="sub-heading">
    <slot />
  </h3>
</template>
