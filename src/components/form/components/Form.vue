<script>

export const Methods = {
  Get: 'get',
  Post: 'post',
  Action: 'action',
};

export const EncTypes = {
  urlencoded: 'application/x-www-form-urlencoded',
  multipart: 'multipart/form-data',
  plain: 'text/plain',
};

export default {
  name: 'focus-form',

  props: {
    /**
     * The method used to submit the form.
     */
    method: {
      type: String,
      default: Methods.Post,
      validator: val => Object
        .values(Methods)
        .includes(val),
    },

    /**
     * Where to send form-data on submittal.
     */
    action: {
      type: String,
    },

    /**
     * Space separated list of character encodings.
     */
    acceptCharset: {
      type: String,
    },

    /**
     * Grants the broswer the ability to autocomplete input elements.
     */
    autoComplete: {
      type: Boolean,
      default: false,
    },

    /**
     * The encoding type when submitting content to the server.
     */
    encType: {
      type: String,
      validator: val => Object
        .keys(EncTypes)
        .concat([null])
        .includes(val),
    },
  },

  computed: {
    formEnctype() {
      return EncTypes[this.encType];
    },

    formAutocomplete() {
      return this.autoComplete ? 'on' : 'off';
    },
  },
};

</script>

<template>
  <form :method="method"
        :action="action"
        :accept-charset="acceptCharset"
        :autocomplete="formAutocomplete"
        :enctype="formEnctype"
        v-on="$listeners">
    <slot />
  </form>
</template>
