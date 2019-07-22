<script>

export default {
  props: {
    label: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      default: '#',
    },
  },
};

</script>

<template>
  <li class="navigation__item">
    <a :href="url" class="navigation__anchor">
      <span class="navigation__text">
        {{ label }}
      </span>
    </a>
  </li>
</template>
