import { shallowMount } from '@vue/test-utils';
import { ButtonGroup } from '../index';
import { Button } from '../../button';

const shallowWrap = propsData => shallowMount(ButtonGroup, { propsData });

describe('button-group', () => {
  it('is a valid vue component', () => {
    expect(ButtonGroup).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(ButtonGroup).element).toMatchSnapshot();
  });

  it('uses the full-width prop', () => {
    const wrapper = shallowWrap({ fullWidth: true });

    expect(wrapper.classes()).toContain('button-group--fullWidth');
  });

  it('uses the segmented prop', () => {
    const wrapper = shallowWrap({ segmented: true });

    expect(wrapper.classes()).toContain('button-group--segmented');
  });

  it('renders child buttons', () => {
    const wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: Button,
      },
    });

    expect(wrapper.find(Button).isVueInstance()).toBeTruthy();
  });
});
