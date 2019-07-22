import { shallowMount } from '@vue/test-utils';
import { ColorPicker } from '../index';

const shallowWrap = (propsData = {}) => shallowMount(ColorPicker, { propsData });

describe('ColorPicker', () => {
  it('is a valid vue component', () => {
    expect(ColorPicker).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(ColorPicker).element).toMatchSnapshot();
  });

  it('uses the allow-alpha prop', () => {
    const wrapper = shallowWrap({ allowAlpha: false });

    expect(wrapper.find('.color-picker-alpha').exists()).toBeFalsy();

    wrapper.setProps({ allowAlpha: true });

    expect(wrapper.find('.color-picker-alpha').exists()).toBeTruthy();
  });

  it('returns a tinycolor object when retrieving the current-color', () => {
    const wrapper = shallowWrap({ value: 'red' });

    const color = wrapper.vm.currentColor;

    expect(color).toBeInstanceOf(Object);
    expect(color).toMatchObject({
      _originalInput: 'red',
      _r: 255,
      _g: 0,
      _b: 0,
    });
  });

  it('correctly sets the current-color to a new color through tinycolor and triggers the input event', () => {
    const wrapper = shallowWrap();
    wrapper.vm.currentColor = 'blue';

    const color = wrapper.vm.currentColor;

    expect(color.toRgb().b).toBe(255);
    expect(wrapper.emitted('input')).not.toBeUndefined();
  });

  it('gets the saturation', () => {
    const wrapper = shallowWrap({ value: 'blue' });

    expect(wrapper.vm.saturation).toBe('hsl(240, 100%, 50%)');
  });

  it('can set the saturation', () => {
    // TODO
  });

  it('can set the hue', () => {
    // TODO
  });

  it('can set the alpha', () => {
    // TODO
  });

  it('can update the saturation dragger position', () => {
    // TODO
  });

  it('can update the hue ruler position', () => {
    // TODO
  });

  it('can update the alpha ruler position', () => {
    // TODO
  });
});
