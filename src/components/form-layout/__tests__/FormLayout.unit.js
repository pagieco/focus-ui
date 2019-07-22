import { shallowMount } from '@vue/test-utils';
import { FormLayout } from '../index';

describe('FormGroup', () => {
  it('is a valid vue component', () => {
    expect(FormLayout).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(FormLayout).element).toMatchSnapshot();
  });

  it('wraps each child component into a form-group item element', () => {
    const wrapper = shallowMount(FormLayout, {
      slots: {
        default: '<div>element 1</div><div>element 2</div>',
      },
    });

    expect(wrapper.findAll('.form-group__item').length).toBe(2);
  });
});
