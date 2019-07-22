<script>

import Section from './Section.vue';

export default {
  components: { Section },

  props: {
    /**
     * Automatically adds sections to layout.
     */
    sectioned: {
      type: Boolean,
      default: false,
    },
  },

  render(h) {
    const slotContent = this.sectioned
      ? h(Section, [this.$slots.default])
      : this.$slots.default;

    return h('div', { class: 'layout' }, slotContent);
  },
};

</script>
