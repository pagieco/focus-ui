import { shallowMount } from '@vue/test-utils';
import { CardSection } from '../index';

const shallowWrap = propsData => shallowMount(CardSection, { propsData });

describe('CardSection', () => {
  it('is a valid vue component', () => {
    expect(CardSection).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(CardSection).element).toMatchSnapshot();
  });

  it('uses the title prop', () => {
    const title = 'Amazing Title';
    const wrapper = shallowWrap({ title });

    expect(wrapper.text()).toContain(title);
  });

  it('uses the subdued prop', () => {
    const wrapper = shallowWrap({ subdued: true });

    expect(wrapper.classes()).toContain('card__section--subdued');
  });

  it('uses the shallow prop', () => {
    const wrapper = shallowWrap({ shallow: true });

    expect(wrapper.classes()).toContain('card__section--shallow');
  });
});
