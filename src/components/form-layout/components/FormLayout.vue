<script>

import { filterClassList } from '../../../utilities';

export default {
  name: 'focus-form-group',

  computed: {
    class_list() {
      return filterClassList([
        'form-group',
      ]);
    },
  },

  render(h) {
    if (!this.$slots.default) {
      this.$slots.default = [];
    }

    // Wrap each form-group item into a div with the form-group__item className.
    // This makes it way easier for us to style the formGroup elements.
    const slots = this.$slots.default.map(slot => (
      h('div', { class: 'form-group__item' }, [
        slot,
      ])
    ));

    return h('div', { class: this.class_list }, slots);
  },
};

</script>
