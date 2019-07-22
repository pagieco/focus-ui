import { shallowMount } from '@vue/test-utils';
import { Icon } from '../index';

const shallowWrap = (propsData = {}) => shallowMount(Icon, { propsData });

describe('Icon', () => {
  it('is a valid vue component', () => {
    expect(Icon).toBeAComponent();
  });

  it('matches the snapshot', () => {
    const propsData = { name: 'user' };

    expect(shallowMount(Icon, { propsData }).element).toMatchSnapshot();
  });

  it('uses the name prop', () => {
    const name = 'times';
    const wrapper = shallowWrap({ name });

    expect(wrapper.attributes('icon')).toBe(name);
  });

  it('use the accessibility-label prop', () => {
    const accessibilityLabel = 'Circle plus icon';
    const wrapper = shallowWrap({ accessibilityLabel, name: 'plus-circle' });

    expect(wrapper.attributes('aria-label')).toBe(accessibilityLabel);
  });
});
