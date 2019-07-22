import { shallowMount } from '@vue/test-utils';
import Card from '../components/Card.vue';
import CardSection from '../components/CardSection.vue';

const shallowWrap = propsData => shallowMount(Card, { propsData });

describe('Card', () => {
  it('is a valid vue component', () => {
    expect(Card).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(Card).element).toMatchSnapshot();
  });

  it('uses the interactive prop', () => {
    const wrapper = shallowWrap({ interactive: true });
    const expectedClass = 'card--interactive';

    expect(wrapper.classes()).toContain(expectedClass);

    wrapper.setProps({ interactive: false });

    expect(wrapper.classes()).not.toContain(expectedClass);
  });

  it('uses the sectioned prop', () => {
    const wrapper = shallowMount(Card);

    expect(wrapper.contains(CardSection)).toBeTruthy();

    wrapper.setProps({ sectioned: false });

    expect(wrapper.contains(CardSection)).toBeFalsy();
  });

  it('renders child components', () => {
    const wrapper = shallowMount(Card, {
      slots: {
        default: '<div>Slot content</div>',
      },
    });

    expect(wrapper.text()).toContain('Slot content');
  });
});
