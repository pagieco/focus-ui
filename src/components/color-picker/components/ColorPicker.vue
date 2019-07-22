<script>

import tinycolor from 'tinycolor2';
import { whileMouseMove } from '../../../utilities';

export default {
  name: 'focus-color-picker',

  props: {
    /**
     * Allow the user to select an alpha value.
     */
    allowAlpha: {
      type: Boolean,
      default: true,
    },

    /**
     * The color value.
     */
    value: {
      type: String,
      default: 'red',
    },

    /**
     * The size of the color picker.
     */
    pickerSize: {
      type: Number,
      default: 160,
    },
  },

  data() {
    return {
      colorValue: this.value,
    };
  },

  computed: {
    currentColor: {
      get() {
        return tinycolor(this.colorValue);
      },

      set(value) {
        this.colorValue = tinycolor(value).toRgbString();
        this.$emit('input', this.colorValue);
      },
    },

    saturation() {
      return `hsl(${this.currentColor.toHsl().h}, 100%, 50%)`;
    },
  },

  mounted() {
    this.updateSaturationDragger();
    this.updateHueRuler();
    this.updateAlphaRuler();
  },

  methods: {
    handleSaturation(e) {
      whileMouseMove(e, (internalEvent) => {
        const saturation = (internalEvent.offsetX / this.pickerSize) * 100;
        const brightness = (1 - (internalEvent.offsetY / this.pickerSize)) * 100;

        this.setSaturation(saturation, brightness);
        this.updateSaturationDragger();
      });
    },

    handleHue(e) {
      whileMouseMove(e, (internalEvent) => {
        const hue = Math.abs(360 * (-(internalEvent.offsetY * 100 / this.pickerSize) + 100) / 100);

        this.setHue(hue);
        this.updateHueRuler();
      });
    },

    handleAlpha(e) {
      whileMouseMove(e, (internalEvent) => {
        const alpha = Math.round((internalEvent.offsetY / this.pickerSize) * 100) / 100;

        this.setAlpha(alpha);
        this.updateAlphaRuler();
      });
    },

    setSaturation(saturation, brightness) {
      const hsv = this.currentColor.toHsv();

      this.currentColor = {
        h: hsv.h,
        s: saturation,
        v: brightness,
        a: hsv.a,
      };
    },

    setHue(hue) {
      const hsl = this.currentColor.toHsl();

      this.currentColor = {
        h: hue,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
      };
    },

    setAlpha(alpha) {
      const hsl = this.currentColor.toHsl();

      this.currentColor = {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: alpha,
      };
    },

    updateSaturationDragger() {
      const hsv = this.currentColor.toHsv();

      const s = hsv.s * 100;
      const v = (1 - hsv.v) * 100;

      this.$refs.saturation_dragger.style.top = `calc(${v}% - 5px)`;
      this.$refs.saturation_dragger.style.left = `calc(${s}% - 5px)`;
    },

    updateHueRuler() {
      const hue = this.currentColor.toHsl().h;
      const y = (-(hue / 360) + 1) * 100;

      this.$refs.hue_ruler.style.top = `${y}%`;
    },

    updateAlphaRuler() {
      if (this.allowAlpha) {
        const alpha = this.currentColor.toHsl().a;
        const y = alpha * 100;

        this.$refs.alpha_ruler.style.top = `${y}%`;
      }
    },
  },
};

</script>

<template>
  <div class="color-picker" :style="{ '--picker-size': `${pickerSize}px` }">

    <div class="color-picker-saturation" @mousedown="handleSaturation">
      <div class="color-picker-saturation__color" :style="{ '--current-saturation': saturation }"></div>
      <div class="color-picker-saturation__black"></div>
      <div class="color-picker-saturation__dragger" ref="saturation_dragger"></div>
    </div>

    <div class="color-picker-hue" @mousedown="handleHue">
      <div ref="hue_ruler" class="color-picker-hue__ruler"></div>
    </div>

    <div class="color-picker-alpha" @mousedown="handleAlpha" v-if="allowAlpha">
      <div class="color-picker-alpha__black" :style="{ '--current-color': `#${currentColor.toHex()}` }"></div>
      <div ref="alpha_ruler" class="color-picker-alpha__ruler"></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .color-picker-saturation__color {
    background: linear-gradient(to right, white, var(--current-saturation));
  }
</style>
