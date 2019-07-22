<script>

import Heading from '../../heading/components/Heading.vue';
import { filterClassList, uuidv4 } from '../../../utilities';
import PrimaryAction from './PrimaryAction.vue';
import { Icon } from '../../icon';

export const Status = {
  Success: 'success',
  Info: 'info',
  Warning: 'warning',
  Critical: 'critical',
};

export default {
  props: {
    /**
     * Whether or not the banner can be dismissed.
     */
    dismissable: {
      type: Boolean,
      default: true,
    },

    /**
     * The primary action for the banner.
     */
    primaryAction: {
      type: Object,
    },

    /**
     * Sets the status of the banner.
     */
    status: {
      type: String,
      default: null,
      validator: val => Object
        .values(Status)
        .concat([null])
        .includes(val),
    },

    /**
     * The title content for the banner.
     */
    title: {
      type: String,
    },
  },

  data() {
    return {
      componentId: null,
    };
  },

  components: {
    Icon,
    Heading,
    PrimaryAction,
  },

  mounted() {
    this.componentId = uuidv4();
  },

  computed: {
    classList() {
      return filterClassList([
        'banner',
        [`banner--status-${this.status}`],
      ]);
    },

    bannerRole() {
      return this.status === Status.Warning || this.status === Status.Critical
        ? 'alert'
        : 'status';
    },

    ariaDescribedBy() {
      return this.title
        ? `BannerTitle_${this.componentId}`
        : `BannerContent_${this.componentId}`;
    },
  },
};

</script>

<template>
  <div tabindex="0" :class="classList" :role="bannerRole" :aria-describedby="ariaDescribedBy">
    <div class="banner__ribbon"></div>

    <div class="banner__dismiss" v-if="dismissable">
      <button class="banner__dismiss__button" @click="$emit('dismiss')">
        <Icon name="times" />
      </button>
    </div>

    <div>
      <div class="banner__heading" v-if="title">
        <Heading :id="`BannerTitle_${componentId}`">{{ title }}</Heading>
      </div>
      <div class="banner__content" :id="`BannerContent_${componentId}`">
        <slot />

        <div class="banner__actions" v-if="primaryAction">
          <PrimaryAction v-bind="{ ...primaryAction }" />
        </div>
      </div>
    </div>
  </div>
</template>
