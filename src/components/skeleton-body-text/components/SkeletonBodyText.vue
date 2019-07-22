<script>

export default {
  props: {
    /**
     * Number of lines to display.
     */
    lines: {
      type: Number,
      default: 3,
    },
  },

  render(h) {
    const bodyTextLines = [];

    for (let i = 0; i < this.lines; i++) {
      bodyTextLines.push(
        h('div', { class: ['skeleton-body-text__line'] }),
      );
    }

    return h('div', { class: 'skeleton-body-text' }, [bodyTextLines]);
  },
};

</script>
