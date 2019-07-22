import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import { whileMouseMove } from '../mouse';

describe('whileMouseMove', () => {
  it('test', () => {
    const component = Vue.component('test', {
      props: {
        eventCallback: {
          type: Function,
          default: () => ({}),
        },
      },
      methods: {
        mousedown(e) {
          whileMouseMove(e, this.eventCallback);
        },
      },
      template: '<div @mousedown="mousedown"></div>',
    });

    const eventCallback = jest.fn();
    const propsData = { eventCallback };
    const wrapper = shallowMount(component, { propsData });

    const mouseDown = new Event('mousedown');

    wrapper.element.dispatchEvent(mouseDown);

    expect(eventCallback).toHaveBeenCalled();
  });
});
