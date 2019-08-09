<script>

import { filterClassList } from '../../../utilities';
import HeaderPrimaryAction from './PrimaryAction.vue';
import HeaderSecondaryActions from './SecondaryActions.vue';
import DisplayText from '../../display-text/components/DisplayText.vue';

export default {
  components: {
    DisplayText,
    HeaderPrimaryAction,
    HeaderSecondaryActions,
  },

  props: {
    // Remove the normal max-width on the page.
    fullWidth: {
      type: Boolean,
      default: false,
    },

    primaryActions: {
      type: Object,
    },

    secondaryActions: {
      type: Array,
    },

    // Page title, in large type.
    title: {
      type: String,
      required: true,
    },
  },

  computed: {
    classList() {
      return filterClassList([
        'page',
        { 'page--full-width': this.fullWidth },
      ]);
    },
  },
};

</script>

<template>
  <div :class="classList">
    <div class="page-header">

      <div class="page-header__main-content">
        <div class="page-header__title">
          <DisplayText size="large">
            {{ title }}
          </DisplayText>
        </div>

        <div class="page-header__primary-actions" v-if="primaryActions">
          <HeaderPrimaryAction v-bind="{ ...primaryActions }" />
        </div>
      </div>

      <div class="page-header__secondary-actions" v-if="secondaryActions">
        <HeaderSecondaryActions :actions="secondaryActions" />
      </div>

    </div>

    <slot />
  </div>
</template>
