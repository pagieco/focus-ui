<script>

import TextField from '../../text-field/components/TextField.vue';

export default {
  components: { TextField },

  mounted() {
    document.addEventListener('keydown', this.inputFocus);
  },

  destroyed() {
    document.removeEventListener('keydown', this.inputFocus);
  },

  methods: {
    inputFocus(e) {
      if (e.metaKey && e.key === '/') {
        this.$refs['topbar-input'].$el.querySelector('input').focus();
      }
    },
  },

  render(h) {
    return h(TextField, {
      ref: 'topbar-input',
      props: {
        name: 'gaaf',
        placeholder: 'Search...',
      },
    });
  },
};

</script>
