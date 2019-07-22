import { shallowMount } from '@vue/test-utils';
import Popover from '../components/Popover.vue';

const shallowWrap = (propsData = {}) => shallowMount(Popover, { propsData });

describe('Popover', () => {
  it('is a valid vue component', () => {
    expect(Popover).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowWrap().element).toMatchSnapshot();
  });

  it('uses the isOpen prop', () => {
    const wrapper = shallowWrap({ isOpen: true });

    expect(wrapper.vm.$data.isShown).toBeTruthy();
  });

  it('uses the placement prop', () => {
    // TODO
  });

  it('uses the offset prop', () => {
    // TODO
  });

  it('emits the open event', () => {
    const wrapper = shallowWrap({ isOpen: false });

    wrapper.vm.open();

    expect(wrapper.emitted('open')).not.toBeUndefined();
  });

  it('emits the close event', () => {
    const wrapper = shallowWrap({ isOpen: true });

    wrapper.vm.close();

    expect(wrapper.emitted('close')).not.toBeUndefined();
  });
});
