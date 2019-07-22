import { shallowMount } from '@vue/test-utils';
import { Thumbnail } from '../index';

const shallowWrap = propsData => shallowMount(Thumbnail, { propsData });

describe('Thumbnail', () => {
  it('is a valid vue component', () => {
    expect(Thumbnail).toBeAComponent();
  });

  it('matches the snapshot', () => {
    const wrapper = shallowWrap({ alt: 'My Alt Text', source: 'image.png' });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('uses the alt prop', () => {
    const wrapper = shallowWrap({ alt: 'My Alt Text', source: 'image.png' });

    expect(wrapper.find('img').attributes('alt')).toBe('My Alt Text');
  });

  it('uses the size prop', () => {
    const wrapper = shallowWrap({
      alt: 'My Alt Text',
      source: 'image.png',
      size: 'small',
    });

    expect(wrapper.classes()).toContain('thumbnail--size-small');
  });

  it('uses the source prop', () => {
    const wrapper = shallowWrap({ alt: 'My Alt Text', source: 'image.png' });

    expect(wrapper.find('img').attributes('src')).toBe('image.png');
  });
});
