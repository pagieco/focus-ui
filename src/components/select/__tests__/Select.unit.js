import { mount, shallowMount } from '@vue/test-utils';
import { Select } from '../index';
import InputLabel from '../../input-label/components/InputLabel.vue';

const shallowWrap = (propsData = {}) => shallowMount(Select, { propsData });
const wrap = (propsData = {}) => mount(Select, { propsData });

describe('Select', () => {
  it('is a valid vue component', () => {
    expect(Select).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowWrap().element).toMatchSnapshot();
  });

  it('uses the disabled prop', () => {
    const wrapper = shallowWrap({ disabled: true });

    expect(wrapper.find('select').attributes('disabled')).toBe('disabled');
    expect(wrapper.find('select').attributes('aria-disabled')).toBe('true');
  });

  it('uses the id prop', () => {
    const id = 'input-id';
    const wrapper = shallowWrap({ id });

    expect(wrapper.find('select').attributes('id')).toBe(id);
  });

  it('uses the label prop', () => {
    const wrapper = shallowWrap({ label: 'Select input' });

    expect(wrapper.contains(InputLabel)).toBeTruthy();
  });

  it('uses the label-for prop', () => {
    const wrapper = wrap({ label: 'Select input', labelFor: 'my-element' });

    expect(wrapper.find(InputLabel).attributes('for')).toBe('my-element');
  });

  it('uses the label-hidden prop', () => {
    const wrapper = wrap({ label: 'Select input', labelHidden: true });

    expect(wrapper.find(InputLabel).html()).toBeUndefined();
  });

  it('uses the name prop', () => {
    const name = 'input-name';
    const wrapper = shallowWrap({ name });

    expect(wrapper.find('select').attributes('name')).toBe(name);
  });

  it('uses the options prop', () => {
    const wrapper = wrap({
      options: [
        { value: 123, label: 'My label' },
        { value: 456, label: 'Another label' },
      ],
    });

    expect(wrapper.findAll('option').length).toBe(2);
  });

  it('uses the placeholder prop', () => {
    const wrapper = wrap({ placeholder: 'Placeholder text' });

    expect(wrapper.find('option[disabled][selected][value=""]').exists()).toBeTruthy();
  });
});
