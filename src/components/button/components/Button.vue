<script>

import { Spinner } from '../../spinner';
import { filterClassList } from '../../../utilities';

export default {
  name: 'focus-button',

  components: { Spinner },

  props: {
    /**
     * Visually hidden text for screen readers.
     */
    ariaLabel: {
      type: String,
    },

    /**
     * Id of the element the button controls.
     */
    ariaControls: {
      type: String,
    },

    /**
     * Tells the screen reader the controlled element is expaned.
     */
    ariaExpanded: {
      type: Boolean,
      default: false,
    },

    /**
     * A unique identifier for the button.
     */
    id: {
      type: String,
    },

    /**
     * Disables the button, disallowing interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Forces the url to open in a new tab.
     */
    external: {
      type: Boolean,
      default: false,
    },

    /**
     * Replaces button text with a spinner.
     */
    loading: {
      type: Boolean,
      default: false,
    },

    /**
     * Provides extra visual weight and identifies the primary action in a set of buttons.
     */
    primary: {
      type: Boolean,
      default: false,
    },

    /**
     * Indicates a dangerous or potentially negative action.
     */
    danger: {
      type: Boolean,
      default: false,
    },

    /**
     * Renders a button that looks like a link.
     */
    minimal: {
      type: Boolean,
      default: false,
    },

    /**
     * Changes the size of the button.
     */
    small: {
      type: Boolean,
      default: false,
    },

    /**
     * Allows the button to submit a form.
     */
    submit: {
      type: Boolean,
      default: false,
    },

    /**
     * A destination to link to, rendered in the href attribute of a link.
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

  inheritAttrs: false,

  computed: {
    classList() {
      return filterClassList([
        'button',
        { 'button--primary': this.primary },
        { 'button--danger': this.danger },
        { 'button--minimal': this.minimal },
        { 'button--small': this.small },
        { 'button--loading': this.loading },
        { 'button--disabled': this.isDisabled },
      ]);
    },

    isDisabled() {
      return this.loading || this.disabled;
    },

    buttonType() {
      return this.submit ? 'submit' : 'button';
    },
  },

  render(h) {
    const label = h('span', { class: 'button__label' }, [
      this.$slots.default,
    ]);

    const defaultAttrs = {
      id: this.id,
      'aria-label': this.ariaLabel,
      'aria-controls': this.ariaControls,
      'aria-expanded': this.ariaExpanded,
      'aria-disabled': this.isDisabled,
      target: this.external ? '_blank' : null,
      disabled: this.isDisabled,
      tabindex: 0,
    };

    // Render a normal anchor element.
    if (this.url !== undefined) {
      return h('a', {
        attrs: {
          ...defaultAttrs,
          href: this.url,
        },
        class: this.classList,
        on: this.$listeners,
      }, [label, this.loading ? h(Spinner) : null]);
    }

    // Render a router-link component.
    if (this.to !== undefined) {
      return h('router-link', {
        attrs: {
          ...defaultAttrs,
          to: this.to,
        },
        class: this.classList,
        on: this.$listeners,
      }, [label, this.loading ? h(Spinner) : null]);
    }

    // Render a normal button element.
    return h('button', {
      attrs: {
        ...defaultAttrs,
        role: 'button',
        type: this.buttonType,
      },
      class: this.classList,
      on: this.$listeners,
    }, [label, this.loading ? h(Spinner) : null]);
  },
};

</script>
