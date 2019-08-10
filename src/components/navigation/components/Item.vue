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

    to: {
      type: [String, Object],
    },
  },
};

</script>

<template>
  <li class="navigation__item">
    <a :href="url" class="navigation__anchor" v-if="url">
      <span class="navigation__text">
        {{ label }}
      </span>
    </a>

    <router-link :to="to" class="navigation__anchor" v-if="to">
      <span class="navigation__text">
        {{ label }}
      </span>
    </router-link>
  </li>
</template>
