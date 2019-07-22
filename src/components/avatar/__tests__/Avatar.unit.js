import { shallowMount } from '@vue/test-utils';
import { Avatar } from '../index';

const shallowWrap = propsData => shallowMount(Avatar, { propsData });

describe('Avatar', () => {
  it('is a valid vue component', () => {
    expect(Avatar).toBeAComponent();
  });

  it('matches the snapshot', () => {
    const propsData = { name: 'Test User' };

    expect(shallowMount(Avatar, { propsData }).element).toMatchSnapshot();
  });

  it('requires the name attribute', () => {
    const wrapper = shallowWrap({ name: '' });

    expect(wrapper.vm.$options.props.name.required).toBeTruthy();
  });

  it('correctly renders the name without a source', () => {
    const wrapper = shallowWrap({ name: 'Test User' });

    expect(wrapper.find('.avatar__initials').classes()).toContain('avatar__initials');
  });

  it('correctly sets the small attribute', () => {
    const wrapper = shallowWrap({ name: 'Test User', small: true });

    expect(wrapper.classes()).toContain('avatar--small');
  });

  it('renders the image when a source is given', () => {
    const wrapper = shallowWrap({ name: 'Test', src: 'https://github.com/jspekken.png' });

    expect(wrapper.contains('img')).toBeTruthy();
  });

  it('uses the accessibility-label prop', () => {
    const accessibilityLabel = 'Persons name';
    const wrapper = shallowWrap({ accessibilityLabel, name: 'Users name' });

    expect(wrapper.attributes('aria-label')).toBe(accessibilityLabel);
  });

  it('correctly sets the aria-label', () => {
    const wrapper = shallowWrap({ name: 'Users name' });

    expect(wrapper.attributes('aria-label')).toBe('Users name');

    wrapper.setProps({ accessibilityLabel: 'Persons name' });

    expect(wrapper.attributes('aria-label')).toBe('Persons name');
  });
});
