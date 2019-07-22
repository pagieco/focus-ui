<script>

import { filterClassList } from '../../../utilities';

export const Alignment = {
  Leading: 'leading',
  Trailing: 'trailing',
  Center: 'center',
  Fill: 'fill',
  Baseline: 'baseline',
};

export const Distrubution = {
  EqualSpacing: 'equal-spacing',
  Leading: 'leading',
  Trailing: 'trailing',
  Center: 'center',
  Fill: 'fill',
};

export default {
  props: {
    /**
     * Adjust vertical alignment of elements.
     */
    alignment: {
      type: String,
      default: Alignment.Center,
      validator: val => Object
        .values(Alignment)
        .includes(val),
    },

    /**
     * Adjust horizontal alignment of elements.
     */
    distribution: {
      type: String,
      default: Distrubution.EqualSpacing,
      validator: val => Object
        .values(Distrubution)
        .includes(val),
    },

    /**
     * Stack the elements vertically.
     */
    vertical: {
      type: Boolean,
      default: false,
    },

    /**
     * Wrap stack elements to additional rows as needed on small screens.
     */
    wrap: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'stack',
        [`stack--align-${this.alignment}`],
        [`stack--distribute-${this.distribution}`],
        { 'stack--vertical': this.vertical },
        { 'stack--wrap': this.wrap },
      ]);
    },
  },

  render(h) {
    if (!this.$slots.default) {
      this.$slots.default = [];
    }

    const slots = this.$slots.default.map(slot => (
      h('div', { class: 'stack__item' }, [slot])
    ));

    return h('div', { class: this.classList }, slots);
  },
};

</script>
