<script>

export default {
  props: {
    /**
     * Shows a skeleton over the breadcrumbs.
     */
    breadcrumbs: {
      type: Boolean,
      default: false,
    },

    /**
     * Shows a skeleton over the primary action.
     */
    primaryAction: {
      type: Boolean,
      default: false,
    },

    /**
     * Number of secondary page-level actions to display.
     */
    secondaryActions: {
      type: Number,
      default: 2,
    },

    /**
     * Decreases the maximum layout width. Intended for single-column layouts.
     */
    singleColumn: {
      type: Boolean,
      default: false,
    },

    /**
     * Page title, in large type.
     */
    title: {
      type: String,
    },
  },
};

</script>

<template>
  <div class="skeleton-page" role="status" aria-label="Page loading">
    <div class="skeleton-page__header skeleton-page__header--has-secondary-actions">
      <div class="skeleton-page__title-and-primary-action">
        <div class="skeleton-page__title">
          ...
        </div>

        <div class="skeleton-page__primary-action">
          ...
        </div>
      </div>
    </div>

    <div class="skeleton-page__content">
      <slot />
    </div>
  </div>
</template>
