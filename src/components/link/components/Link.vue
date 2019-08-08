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

    /**
     * Denotes the target route of the link.
     */
    to: {
      type: [String, Object],
    },
  },

  render(h) {
    const attrs = {};

    if (this.external) {
      attrs.target = '_blank';
      attrs.rel = 'noopener noreferrer';
    }

    // Render a router-link component.
    if (this.to !== undefined) {
      return h('router-link', {
        attrs: { ...attrs, to: this.to },
        class: ['link'],
      }, [
        this.$slots.default,
        this.getIcon(h),
      ]);
    }

    // Render a normal anchor element.
    return h('a', {
      attrs: { ...attrs, href: this.href },
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
