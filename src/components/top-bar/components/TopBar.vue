<script>

import SearchField from './SearchField.vue';

export default {
  name: 'focus-top-bar',

  components: { SearchField },
};

</script>

<template>
  <div class="top-bar">
    <div class="top-bar__logo-container">
      ...
    </div>

    <div class="top-bar__contents">
      <div class="top-bar__search">
        <SearchField />
      </div>

      test
    </div>
  </div>
</template>
