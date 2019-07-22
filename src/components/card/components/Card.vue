<script>

import CardSection from './CardSection.vue';
import { filterClassList } from '../../../utilities';

export default {
  name: 'focus-card',

  components: { CardSection },

  props: {
    /**
     * Indicates that the card is interactive.
     */
    interactive: {
      type: Boolean,
      default: false,
    },

    /**
     * Auto wrap content in section.
     */
    sectioned: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'card',
        { 'card--interactive': this.interactive },
      ]);
    },
  },

  render(h) {
    return h('div', { class: this.classList }, [
      h(this.sectioned ? CardSection : 'div', [
        this.$slots.default,
      ]),
    ]);
  },
};

</script>
