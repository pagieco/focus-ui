<script>

import { Icon } from '../../icon';

export default {
  components: { Icon },

  props: {
    /**
     * Use for a link that opens in a different window.
     */
    external: {
      type: Boolean,
      default: false,
    },

    /**
     * The url to link to.
     */
    url: {
      type: String,
    },
  },

  render(h) {
    const attrs = { href: this.url };

    if (this.external) {
      attrs.target = '_blank';
      attrs.rel = 'noopener noreferrer';
    }

    return h('a', {
      attrs,
      class: ['link'],
    }, [
      this.$slots.default,
      this.getIcon(h),
    ]);
  },

  methods: {
    getIcon(h) {
      if (this.external) {
        return h(Icon, {
          class: ['link__icon'],
          props: { name: 'external-link-alt' },
        });
      }

      return null;
    },
  },
};

</script>
